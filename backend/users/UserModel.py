from sqlalchemy import Column, Integer, String
from config import Base


class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    user_name = Column(String)
    password = Column(String)
