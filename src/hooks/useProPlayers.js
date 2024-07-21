import { useQuery } from "react-query";

const fetchPlayers = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/proPlayers`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useProPlayers = () => {
  const { data, isLoading } = useQuery({
    queryKey: [`proPlayers`],
    queryFn: () => fetchPlayers(),
  });

  return {
    data,
    isLoading,
  };
};
