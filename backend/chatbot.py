from flask import Flask, render_template, request, jsonify
import http.client
import urllib.parse
import json
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__, template_folder="C:\\Users\\User\\Desktop\\fyp final\\templates")

# Replace with your actual API key and host
API_KEY = "45a389bba9msh955a7f083060bedp1752e8jsnd73a869cf003"
API_HOST = "free-chatgpt-api.p.rapidapi.com"

# MongoDB connection details
MONGO_URI = "mongodb+srv://mfakhar910:Haider5080@smart.ukfepn6.mongodb.net/"  # Replace with your actual MongoDB URI if needed
DATABASE_NAME = "data3"
COLLECTION_NAME = "predicted"

# MongoDB client and database initialization
client = MongoClient(MONGO_URI)
db = client[DATABASE_NAME]
collection = db[COLLECTION_NAME]


def save_to_mongodb(user_input, prediction_response):
    """
    Saves the user input and bot response to MongoDB.
    """
    document = {
        "user_input": user_input,
        "prediction_response": prediction_response,
        "timestamp": datetime.now()
    }
    collection.insert_one(document)


def get_response_from_api(prompt):
    """
    Sends a request to the API with the user's prompt and retrieves the response.
    """
    conn = http.client.HTTPSConnection(API_HOST)
    url = f"/chat-completion-one?{urllib.parse.urlencode({'prompt': prompt})}"

    headers = {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
    }

    try:
        conn.request("GET", url, headers=headers)
        res = conn.getresponse()
        data = res.read()
        return json.loads(data.decode("utf-8"))
    except Exception as e:
        return {"error": str(e)}
    finally:
        conn.close()


@app.route('/prediction')
def home():
    """
    Renders the chatbot home page.
    """
    return render_template('prediction.html')


@app.route('/get_response', methods=['POST'])
def get_response():
    """
    Handles AJAX requests to get chatbot responses.
    """
    user_input = request.json.get('prompt')
    if not user_input:
        return jsonify({'response': 'Please provide a valid input.'})

    # Get the API response
    api_response = get_response_from_api(user_input)
    if "error" in api_response:
        return jsonify({'response': f"Error: {api_response['error']}"})

    prediction_response = api_response.get('response', 'No response received from API')

    # Save user input and bot response to MongoDB
    save_to_mongodb(user_input, prediction_response)

    return jsonify({'response': prediction_response})


@app.route('/logs', methods=['GET'])
def view_logs():
    """
    Fetches and displays chat logs from MongoDB.
    """
    logs = collection.find().sort("timestamp", -1)
    formatted_logs = [
        {
            "user_input": log["user_input"],
            "bot_response": log["prediction_response"],
            "timestamp": log["timestamp"].strftime("%Y-%m-%d %H:%M:%S")
        }
        for log in logs
    ]
    return jsonify({'logs': formatted_logs})


if __name__ == '__main__':
    app.run(debug=True)
