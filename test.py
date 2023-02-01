from fastapi import FastAPI, Path

app = FastAPI()

inventory = {
    1: {
        "name" : "KokoMonkey",
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

# Query Parameter
@app.get("/get-by-name")
def get_item(name: str):
    for item_id in nft_dict:
        if inventory[item_id]["name"] == name:
            return inventory[item_id]
        return{"Data":"Not Found"}