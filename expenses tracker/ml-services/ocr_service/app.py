# ml-services/ocr_service/app.py
from fastapi import FastAPI, File, UploadFile
from utils import extract_text
import shutil
import os

app = FastAPI()

@app.post("/extract-receipt/")
async def extract_receipt(file: UploadFile = File(...)):
    file_location = f"temp_receipts/{file.filename}"
    with open(file_location, "wb") as f:
        shutil.copyfileobj(file.file, f)

    data = extract_text(file_location)
    os.remove(file_location)

    return data
