import { useQuery } from 'react-query';
import { api } from '../api'; // Adjust the import path

export const useUserProfile = (id: string) => {
  return useQuery(
    ['userProfile', id],
    async () => {
      const response = await api.get(`/profile/${id}`);
      return response.data;
    }
  );
};