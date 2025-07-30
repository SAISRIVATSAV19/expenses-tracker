# ml-services/ocr_service/utils.py
import pytesseract
from PIL import Image
import re

def extract_text(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)

    amount_match = re.search(r'(\d+[\.,]?\d{0,2})\s*(INR|Rs|₹)', text, re.IGNORECASE)
    title_match = re.search(r'(?:from|merchant|store|at)\s*[:\-]?\s*([A-Za-z0-9 &]+)', text, re.IGNORECASE)

    amount = amount_match.group(1) if amount_match else None
    title = title_match.group(1).strip() if title_match else "Unknown"

    return {
        "title": title,
        "amount": float(amount.replace(',', '')) if amount else None
    }
