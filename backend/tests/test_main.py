import pytest
from fastapi import status
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_root_endpoint(client):
    """Teste l'endpoint racine de l'API."""
    response = await client.get("/")
    assert response.status_code == status.HTTP_200_OK
    assert "message" in response.json()
    assert "version" in response.json()
    assert "docs" in response.json()
    assert "openapi" in response.json()
    assert "Bienvenue sur Bizidea API by HumanOS" in response.json()["message"]

@pytest.mark.asyncio
async def test_health_check_endpoint(client):
    """Teste l'endpoint de vérification de santé."""
    response = await client.get("/health")
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["status"] == "healthy"
    assert "service" in response.json()
    assert response.json()["service"] == "Bizidea by HumanOS"

@pytest.mark.asyncio
async def test_api_docs_endpoint(client):
    """Teste que la documentation OpenAPI est accessible."""
    response = await client.get("/docs")
    assert response.status_code == status.HTTP_200_OK
    # La documentation devrait être une page HTML
    assert "text/html" in response.headers.get("content-type", "")

@pytest.mark.asyncio
async def test_openapi_json_endpoint(client):
    """Teste que le schéma OpenAPI est accessible."""
    response = await client.get("/api/v1/openapi.json")
    assert response.status_code == status.HTTP_200_OK
    # Le schéma OpenAPI devrait être un JSON
    assert "application/json" in response.headers.get("content-type", "")
    # Vérifier que le schéma contient les informations de base
    json_response = response.json()
    assert "openapi" in json_response
    assert "info" in json_response
    assert "paths" in json_response
    assert json_response["info"]["title"] == "Bizidea by HumanOS"
