# train_tfidf.py
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer

# Sample text data (replace this with your actual data)
corpus = [
    "This is the first document.",
    "This document is the second document.",
    "And this is the third one.",
    "Is this the first document?"
]

# Initialize the TfidfVectorizer
tfidf_vectorizer = TfidfVectorizer()

# Fit the vectorizer to the text data
tfidf_vectorizer.fit(corpus)

# Save the trained TfidfVectorizer to a file
joblib.dump(tfidf_vectorizer, 'tfidf_vectorizer.sav')

print("TF-IDF Vectorizer has been saved as tfidf_vectorizer.sav")
