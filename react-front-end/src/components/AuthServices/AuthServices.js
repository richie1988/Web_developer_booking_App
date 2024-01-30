// AuthService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

export const register = (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

export const login = (userData) => {
  return axios.post(`${API_BASE_URL}/login`, userData);
};

export const logout = () => {
  // Implement logout logic if needed
};

export const isAuthenticated = () => {
  // Check if the user is authenticated (use JWT token, localStorage, etc.)
  return false; // Replace with your authentication logic
};
