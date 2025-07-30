# ml-services/category_predictor/app.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib

app = FastAPI()
model = joblib.load("model.pkl")
vectorizer = joblib.load("vectorizer.pkl")

class ExpenseTitle(BaseModel):
    title: str

@app.post("/predict")
def predict_category(data: ExpenseTitle):
    if not data.title:
        raise HTTPException(status_code=400, detail="Title is required")
    X = vectorizer.transform([data.title])
    prediction = model.predict(X)[0]
    return {"category": prediction}
