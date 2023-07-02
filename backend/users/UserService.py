from sqlalchemy.orm import Session
from UserModel import User
from UserSchemas import UserSchema


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(User).offset(skip).limit(limit).all()


def get_user_by_id(db: Session, user_id: int):
    return db.query(User).filter(User.id == user_id).first()


def register(db: Session, user: UserSchema):
    _user = User(user_name = user.user_name, password = user.password)