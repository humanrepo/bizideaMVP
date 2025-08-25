import pytest
from fastapi import status
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_signup(client, test_user_data):
    response = await client.post("/api/v1/auth/signup", json=test_user_data)
    assert response.status_code == status.HTTP_201_CREATED
    assert response.json()["email"] == test_user_data["email"]

@pytest.mark.asyncio
async def test_signup_existing_user(client, test_user_data):
    # Créer un utilisateur d'abord
    await client.post("/api/v1/auth/signup", json=test_user_data)
    
    # Essayer de s'inscrire à nouveau avec le même email
    response = await client.post("/api/v1/auth/signup", json=test_user_data)
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert response.json()["detail"] == "Email already registered"

@pytest.mark.asyncio
async def test_login(client, test_user_data):
    # Créer un utilisateur d'abord
    await client.post("/api/v1/auth/signup", json=test_user_data)
    
    # Essayer de se connecter
    response = await client.post("/api/v1/auth/login", json=test_user_data)
    assert response.status_code == status.HTTP_200_OK
    assert "access_token" in response.json()

@pytest.mark.asyncio
async def test_login_invalid_credentials(client):
    response = await client.post("/api/v1/auth/login", json={
        "email": "wrong@example.com",
        "password": "wrongpassword"
    })
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
    assert response.json()["detail"] == "Invalid credentials"
