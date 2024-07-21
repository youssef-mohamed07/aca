import { useQuery } from "react-query";

const fetchEvents = async () => {
  try {
    const response = await fetch("https://cocacademy-com.preview-domain.com/api/events");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error; // Re-throw the error so react-query can handle it
  }
};

export const useEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
    retry: 3, // Retry failed requests 3 times
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
  });
};