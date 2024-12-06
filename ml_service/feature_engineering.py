import pandas as pd

def create_features(data):
    """
    This function takes a DataFrame with a 'text' column and creates
    additional features for the model.
    """
    # Calculate the length of each text
    data['length'] = data['text'].apply(len)
    
    # Calculate the number of words in each text
    data['num_words'] = data['text'].apply(lambda x: len(x.split()))
    
    # Add more custom feature engineering logic here if needed
    # For example: average word length, number of special characters, etc.
    return data
