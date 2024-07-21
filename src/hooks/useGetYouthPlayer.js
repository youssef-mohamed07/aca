import { useQuery } from "react-query";

const fetchPlayers = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_REACT_APP_API_URL}/api/youthPlayers/${id}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const useGetYouthPlayer = (id) => {
  const { data, isLoading } = useQuery({
    queryKey: [`youthPlayer`],
    queryFn: () => fetchPlayers(id),
  });

  return {
    data,
    isLoading,
  };
};
