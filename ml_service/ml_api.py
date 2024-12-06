# ml_service/ml_api.py
# backend/app.py
# ml_api.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import pandas as pd
import numpy as np
from feature_engineering import create_features

app = FastAPI()

# Load the SVM model and TfidfVectorizer
model = joblib.load("svm.sav")
vectorizer = joblib.load("tfidf_vectorizer.sav")

class PredictionRequest(BaseModel):
    text: str

@app.post("/predict")
async def predict(request: PredictionRequest):
    try:
        # Create a DataFrame for the input text
        data = pd.DataFrame({"text": [request.text]})
        
        # Generate engineered features
        data = create_features(data)
        
        # Convert text into numerical features using the vectorizer
        text_vectorized = vectorizer.transform(data['text'])
        
        # Concatenate vectorized text and engineered features
        features = np.hstack([text_vectorized.toarray(), data[['length', 'num_words']].values])
        
        # Make prediction using the SVM model
        prediction = model.predict(features)
        
        return {"prediction": prediction[0]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Run with: uvicorn ml_api:app --reload --port 8001





