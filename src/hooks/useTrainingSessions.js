import { useQuery } from "react-query";

const fetchSessions = async () => {
  try {
    
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/video-groups`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useTrainingSessions = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["trainingSessions"],
    queryFn: () => fetchSessions(),
  });

  return {
    data,
    isLoading,
  };
};
