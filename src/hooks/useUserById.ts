import { useQuery, useQueryClient, QueryFunctionContext } from 'react-query';

const fetchUserById = async ({ queryKey }: QueryFunctionContext<(string | number)[]>) => {
  const id = queryKey[1] as number;
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const useUserById = (id: number) => {
  return useQuery(['user', id], fetchUserById, {
    onError: (error) => {
      console.error('Error fetching user data:', error);
    },
  });
};