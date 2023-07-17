from fastapi import FastAPI
import users.UserModel
from config import engine

app = FastAPI()

users.UserModel.metadata.create_all(bind=engine)

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
