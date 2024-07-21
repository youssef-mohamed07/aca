// api.js
import axios from 'axios';

const API_BASE_URL = 'https://cocacademy-com.preview-domain.com/api';

export const fetchVideos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/shows`);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    return [];
  }
};