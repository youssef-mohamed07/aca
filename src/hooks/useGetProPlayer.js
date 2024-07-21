import { useQuery } from "react-query";

const fetchPlayers = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/proPlayers/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useGetProPlayer = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: [`proPlayer`],
    queryFn: () => fetchPlayers(id),
  });

  return {
    data,
    isLoading,
  };
};
