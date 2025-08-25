import pytest
from fastapi import status
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_get_current_user_profile(client, test_user_data):
    # Créer un utilisateur et obtenir un token
    await client.post("/api/v1/auth/signup", json=test_user_data)
    login_response = await client.post("/api/v1/auth/login", json=test_user_data)
    token = login_response.json()["access_token"]
    
    # Tester la récupération du profil utilisateur
    response = await client.get(
        "/api/v1/users/me",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["email"] == test_user_data["email"]
    assert response.json()["first_name"] == test_user_data["first_name"]
    assert response.json()["last_name"] == test_user_data["last_name"]

@pytest.mark.asyncio
async def test_get_user_profile_by_id(client, test_user_data):
    # Créer un utilisateur et obtenir un token
    await client.post("/api/v1/auth/signup", json=test_user_data)
    login_response = await client.post("/api/v1/auth/login", json=test_user_data)
    token = login_response.json()["access_token"]
    
    # Tester la récupération du profil utilisateur par ID
    response = await client.get(
        "/api/v1/users/1",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["email"] == test_user_data["email"]

@pytest.mark.asyncio
async def test_get_user_profile_not_found(client, test_user_data):
    # Créer un utilisateur et obtenir un token
    await client.post("/api/v1/auth/signup", json=test_user_data)
    login_response = await client.post("/api/v1/auth/login", json=test_user_data)
    token = login_response.json()["access_token"]
    
    # Tester la récupération d'un utilisateur inexistant
    response = await client.get(
        "/api/v1/users/999",
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == status.HTTP_404_NOT_FOUND
    assert response.json()["detail"] == "User not found"

@pytest.mark.asyncio
async def test_update_user_profile(client, test_user_data):
    # Créer un utilisateur et obtenir un token
    await client.post("/api/v1/auth/signup", json=test_user_data)
    login_response = await client.post("/api/v1/auth/login", json=test_user_data)
    token = login_response.json()["access_token"]
    
    # Mettre à jour le profil utilisateur
    update_data = {"first_name": "Updated", "last_name": "Name"}
    response = await client.put(
        "/api/v1/users/me",
        json=update_data,
        headers={"Authorization": f"Bearer {token}"}
    )
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["first_name"] == "Updated"
    assert response.json()["last_name"] == "Name"
    assert response.json()["email"] == test_user_data["email"]  # Email ne doit pas changer

@pytest.mark.asyncio
async def test_unauthorized_access(client):
    # Tester l'accès sans token
    response = await client.get("/api/v1/users/me")
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
