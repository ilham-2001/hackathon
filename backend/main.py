from fastapi import FastAPI
from fastapi import File
from typing import Annotated

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*']
)

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/uii_verif ")
async def verify_document(file: Annotated[bytes, File()]):
    return {"file_size": len(file)}


if __name__ == "__main__":
  print("server is running")