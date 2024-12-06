import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth'; // Backend URL

const authService = {
  isAuthenticated: () => !!localStorage.getItem('token'),

  register: async (username, email, password) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { username, email, password });
      localStorage.setItem('token', response.data.token); // Store token
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      localStorage.setItem('token', response.data.token); // Store token
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  logout: () => {
    localStorage.removeItem('token'); // Remove token
  },

  getProfile: async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('No token found. Please login.');
    }

    try {
      const response = await axios.get('http://localhost:4000/api/user/profile', {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
  },

  updateProfile: async (data) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.put('http://localhost:4000/api/user/profile', data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to update profile');
    }
  },
};

export default authService;

