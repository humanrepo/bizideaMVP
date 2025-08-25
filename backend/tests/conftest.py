import pytest
import pytest_asyncio
from httpx import AsyncClient
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import NullPool

from backend.main import app
from backend.database import Base, get_db
from backend.config import settings

# Configuration de la base de données de test
TEST_DATABASE_URL = "sqlite+aiosqlite:///:memory:"

# Création du moteur de base de données de test
test_engine = create_async_engine(
    TEST_DATABASE_URL,
    echo=False,
    poolclass=NullPool,
    future=True,
)

# Session factory pour les tests
TestingSessionLocal = sessionmaker(
    test_engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
)

@pytest_asyncio.fixture(scope="function")
async def test_db():
    """Fixture pour créer et supprimer les tables de test."""
    # Créer toutes les tables
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    
    yield
    
    # Supprimer toutes les tables après les tests
    async with test_engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

@pytest_asyncio.fixture(scope="function")
async def db_session(test_db):
    """Fixture pour fournir une session de base de données."""
    async with TestingSessionLocal() as session:
        yield session

@pytest_asyncio.fixture(scope="function")
async def client(db_session):
    """Fixture pour créer un client de test avec une base de données de test."""
    
    async def override_get_db():
        try:
            yield db_session
            await db_session.commit()
        except Exception:
            await db_session.rollback()
            raise
        finally:
            await db_session.close()
    
    # Remplacement de la dépendance de base de données
    app.dependency_overrides[get_db] = override_get_db
    
    async with AsyncClient(app=app, base_url="http://test") as client:
        yield client
    
    # Nettoyer les remplacements
    app.dependency_overrides.clear()

@pytest.fixture
def test_user_data():
    """Données de test pour un utilisateur."""
    return {
        "email": "test@example.com",
        "password": "testpassword123",
        "first_name": "Test",
        "last_name": "User"
    }
