import pytest
from fastapi import status
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_get_user_ideas_endpoint_exists(client, test_user_data):
    # Créer un utilisateur et obtenir un token
    await client.post("/api/v1/auth/signup", json=test_user_data)
    login_response = await client.post("/api/v1/auth/login", json=test_user_data)
    token = login_response.json()["access_token"]
    
    # Tester que l'endpoint existe et retourne la réponse attendue
    response = await client.get(
        "/api/v1/ideas/",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["message"] == "User ideas endpoint - to be implemented"

@pytest.mark.asyncio
async def test_generate_business_idea_endpoint_exists(client, test_user_data):
    # Créer un utilisateur et obtenir un token
    await client.post("/api/v1/auth/signup", json=test_user_data)
    login_response = await client.post("/api/v1/auth/login", json=test_user_data)
    token = login_response.json()["access_token"]
    
    # Tester que l'endpoint existe et retourne la réponse attendue
    response = await client.post(
        "/api/v1/ideas/generate",
        json={"prompt": "Test prompt"},
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["message"] == "Idea generation endpoint - to be implemented"
    assert response.json()["prompt"] == "Test prompt"

@pytest.mark.asyncio
async def test_get_idea_details_endpoint_exists(client, test_user_data):
    # Créer un utilisateur et obtenir un token
    await client.post("/api/v1/auth/signup", json=test_user_data)
    login_response = await client.post("/api/v1/auth/login", json=test_user_data)
    token = login_response.json()["access_token"]
    
    # Tester que l'endpoint existe et retourne la réponse attendue
    response = await client.get(
        "/api/v1/ideas/1",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["message"] == "Idea details for ID 1 - to be implemented"

@pytest.mark.asyncio
async def test_delete_idea_endpoint_exists(client, test_user_data):
    # Créer un utilisateur et obtenir un token
    await client.post("/api/v1/auth/signup", json=test_user_data)
    login_response = await client.post("/api/v1/auth/login", json=test_user_data)
    token = login_response.json()["access_token"]
    
    # Tester que l'endpoint existe et retourne la réponse attendue
    response = await client.delete(
        "/api/v1/ideas/1",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["message"] == "Delete idea 1 - to be implemented"

@pytest.mark.asyncio
async def test_ideas_endpoints_require_authentication(client):
    # Tester que tous les endpoints d'idées nécessitent une authentification
    endpoints = [
        ("GET", "/api/v1/ideas/"),
        ("POST", "/api/v1/ideas/generate"),
        ("GET", "/api/v1/ideas/1"),
        ("DELETE", "/api/v1/ideas/1")
    ]
    
    for method, endpoint in endpoints:
        if method == "GET":
            response = await client.get(endpoint)
        elif method == "POST":
            response = await client.post(endpoint, json={"prompt": "test"})
        elif method == "DELETE":
            response = await client.delete(endpoint)
        
        assert response.status_code == status.HTTP_401_UNAUTHORIZED
