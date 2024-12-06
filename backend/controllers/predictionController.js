const axios = require('axios');

exports.getPrediction = async (req, res) => {
  try {
    const { question } = req.body;
    const response = await axios.post('http://localhost:8001/predict', { question });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching prediction from FastAPI:', error.message);
    res.status(500).json({ error: 'Failed to get prediction' });
  }
};

