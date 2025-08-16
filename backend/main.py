from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scraper import scrape_and_rank

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/rankings/{position}")
async def get_rankings(position: str):
    rankings = scrape_and_rank(position)
    return {"data": rankings}
