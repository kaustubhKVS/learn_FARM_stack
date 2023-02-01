from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    brand: Optional[str] = None
    

app = FastAPI()

inventory = {
    1: {
        "name" : "dodo",
        "price" : 100,
        "Currency" : "BTC",
        "Author": "Luffy",
        "Producer" : "OnePiece",
    }
}

@app.get("/")
def home():
    return {"Data" : "Testing"}

@app.get("/about")
def about():
    return "NFT-Marketplace Under Construction"

@app.get("/view_nft/{nft_id}")
def view_nft(nft_id: int = Path(None, description="Please enter the ID of item you like to view")):
    return nft_dict[nft_id]

nft_dict = {
    1: {
        "name" : "KokoMonkey",
        "price" : 100,
        "Currency" : "BTC",
        "Author": "Luffy",
        "Producer" : "OnePiece",
    }
}

# Query Parameter: data which comes inside
# Path parametr, route based parameters
# add None to def for having optional parameter
# Add the strict qurey parameter first and later add optional parameters
# Put * tp accept infinite arguments

@app.get("/get-by-name/{item_id}")
def get_item(*, item_id: int, test:int, name: Optional[str] = None):
    for item_id in nft_dict:
        if inventory[item_id]["name"] == name:
            return inventory[item_id]
        return{"Data":"Not Found"}
    
@app.post("/create-item/{item_id}")
def create_item(item_id: int,item: Item):
    if item_id in inventory:
        return{"Error":"ItemID already exits"}
    
    inventory[item_id] = {"name": item.name, "brand": item.brand, "price":item.price}
    return inventory[item_id]