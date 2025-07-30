# ml-services/category_predictor/train_model.py
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
import joblib

# Sample data (you can enhance this later)
data = {
    'title': ['Pizza Hut', 'Uber Ride', 'Flight to Delhi', 'Electricity Bill', 'Amazon order'],
    'category': ['Food', 'Travel', 'Travel', 'Utilities', 'Shopping']
}

df = pd.DataFrame(data)

# Vectorize titles
vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(df['title'])
y = df['category']

# Train model
model = MultinomialNB()
model.fit(X, y)

# Save model and vectorizer
joblib.dump(model, 'model.pkl')
joblib.dump(vectorizer, 'vectorizer.pkl')
