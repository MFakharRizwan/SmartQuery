import axios from 'axios';

export const getPrediction = async (text) => {
    try {
        const response = await axios.post('http://localhost:5000/predict', { text });
        return response.data;
    } catch (error) {
        console.error('Error making prediction:', error);
        return { error: 'Failed to get prediction' };
    }
};
