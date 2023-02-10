from fastapi import FastAPI, HTTPException
# to allow fastapi to use the protocol layer of the development system.

### PAY CAREFUL ATTENTION TO ROUTING, IT WILL MESS STUFF UP FOR SURE

from model import Todo

from database import (
    fetch_one_todo,
    fetch_all_todos,
    create_todo,
    update_todo,
    remove_todo,
)

from fastapi.middleware.cors import CORSMiddleware

#App FastAPI object
app = FastAPI()

origins = ['http://localhost:3000',]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/")
def read_root():
    return {"ping":"pong"}

@app.get("/api/todo")
async def get_todo():
    response = await fetch_all_todos()
    return response

@app.get("/api/todo/{title}", response_model=Todo)
async def get_todo_by_title(title):
    response = await fetch_one_todo(title)
    if response:
        return response
    raise HTTPException(404, f"There is no TODO item with this title {title}")

@app.post("/api/todo/", response_model=Todo)
async def post_todo(todo:Todo):
    response = await create_todo(todo.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong/ Bad Request")

@app.put("/api/todo/{title}/", response_model=Todo)
async def post_todo_by_id(title:str, desc:str):
    response = await update_todo(title,desc)
    if response:
        return response
    raise HTTPException(404, f"There is no TODO item with this title {title}")

@app.delete("/api/todo/{title}")
async def delete_todo(title):
    response = await remove_todo(title)
    if response:
        return "Succesfully deleted todo item!"
    raise HTTPException(404, f"There is no TODO item with this title {title}")
    