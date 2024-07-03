import axios from 'axios';

const API_BASE_URL = https//locksync.onrender.com

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, 
});

export const fetchSharedAccounts = async () => {
  try {
    const response = await api.get('/api/users/shared');
    return response.data;
  } catch (error) {
    console.error('Error fetching shared accounts:', error.response.data);
    throw error;
  }
};
