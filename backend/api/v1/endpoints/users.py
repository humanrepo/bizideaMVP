from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ..database import get_db
from ..models import User
from ..schemas import UserOut
from ..utils import get_current_active_user

router = APIRouter()

@router.get("/me", response_model=UserOut)
async def get_current_user_profile(
    current_user: User = Depends(get_current_active_user)
):
    return current_user

@router.get("/{user_id}", response_model=UserOut)
async def get_user_profile(
    user_id: int,
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(User).where(User.id == user_id))
    user = result.scalars().first()
    
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    return user

@router.put("/me", response_model=UserOut)
async def update_user_profile(
    user_data: dict,
    current_user: User = Depends(get_current_active_user),
    db: AsyncSession = Depends(get_db)
):
    # Update user fields
    for field, value in user_data.items():
        if hasattr(current_user, field) and field not in ["id", "email", "created_at"]:
            setattr(current_user, field, value)
    
    await db.commit()
    await db.refresh(current_user)
    
    return current_user
