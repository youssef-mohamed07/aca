import { useQuery } from 'react-query';
import axios from 'axios';

const fetchCoaches = async () => {
  try {
    const response = await axios.get('https://cocacademy-com.preview-domain.com/api/coachEvents');
    console.log('API Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching coaches:', error);
    throw error;
  }
};

export const useCoaches = () => {
  return useQuery('coaches', fetchCoaches, {
    refetchOnWindowFocus: false,
    retry: 3,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};