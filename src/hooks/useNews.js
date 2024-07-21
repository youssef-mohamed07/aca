import { useQuery } from 'react-query';
import axios from 'axios';

const fetchNews = async () => {
  const response = await axios.get('https://cocacademy-com.preview-domain.com/api/news');
  return response.data;
};

export const useNews = () => {
  return useQuery('news', fetchNews);
};