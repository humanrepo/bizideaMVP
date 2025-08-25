from fastapi import APIRouter
from .endpoints import auth, users, ideas

api_router = APIRouter()

# Include all endpoint routers
api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(users.router, prefix="/users", tags=["Users"])
api_router.include_router(ideas.router, prefix="/ideas", tags=["Ideas"])
