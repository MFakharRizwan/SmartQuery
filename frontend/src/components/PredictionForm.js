import React, { useState } from "react";
import axios from "axios";

function PredictionForm() {
    const [inputText, setInputText] = useState("");
    const [prediction, setPrediction] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:5000/predict", { text: inputText });
            setPrediction(response.data.prediction);
        } catch (error) {
            console.error("Error fetching prediction:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your question"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleSubmit}>Get Prediction</button>
            <p>Prediction: {prediction}</p>
        </div>
    );
}


export default PredictionForm;


