from fastapi import FastAPI, Path, Query
from typing import Optional
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    brand: Optional[str] = None

class UpdateItem(BaseModel):
    name: Optional[str] = None
    price: Optional[float] = None
    brand: Optional[str] = None
    

app = FastAPI()

inventory = {}

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
    
@app.get("/get-by-name")
def get_item(name: str = Query(None, title="Name", description='Name of the item')):
    for item_id in nft_dict:
        if inventory[item_id].name == name:
            return inventory[item_id]
        return{"Data":"Not Found"}
    
@app.post("/create-item/{item_id}")
def create_item(item_id: int,item: Item):
    if item_id in inventory:
        return{"Error":"ItemID already exits"}
    
    inventory[item_id] = item
    return inventory[item_id]


@app.put("/update-item/{item_id}")
def update_item(item_id: int, item: UpdateItem):
    if item_id not in inventory:
        return {"Error": "Item does not exist"}
    
    if item.name != None:
        inventory[item_id].name = item.name
        
    if item.price != None:
        inventory[item_id].price = item.price
    
    if item.brand != None:
        inventory[item_id].brand = item.brand
    
    return inventory[item_id]

@app.delete("/delete=item")
def delete_item(item_id: int = Query(..., description="Id of item to be deleted") ):
    if item_id not in inventory:
        return {"Error": "Item does not exist"}
    
    del inventory[item_id]
    return{"OK":"200"}