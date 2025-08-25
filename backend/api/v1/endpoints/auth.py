from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from ..database import get_db
from ..models import User
from ..schemas import UserCreate, UserOut
from ..utils import create_access_token

router = APIRouter()

@router.post("/signup", response_model=UserOut)
async def signup(user: UserCreate, db: AsyncSession = Depends(get_db)):
    # Check if user already exists
    result = await db.execute(select(User).where(User.email == user.email))
    existing_user = result.scalars().first()
    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already registered")
    
    # Create new user
    new_user = User.create(
        email=user.email,
        first_name=user.first_name,
        last_name=user.last_name,
        password=user.password
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    
    return new_user

@router.post("/login")
async def login(user: UserCreate, db: AsyncSession = Depends(get_db)):
    # Authenticate user
    result = await db.execute(select(User).where(User.email == user.email))
    user_in_db = result.scalars().first()
    
    if not user_in_db or not user_in_db.verify_password(user.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    
    access_token = create_access_token(data={"sub": user_in_db.email})
    return {"access_token": access_token, "token_type": "bearer"}
