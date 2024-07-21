import { useQuery } from "react-query";

const fetchPlayers = async () => {
  try {
    
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/youthPlayers`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useYouthPlayers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [`youthPlayers`],
    queryFn: () => fetchPlayers(),
  });

  return {
    data,
    isLoading,
  };
};