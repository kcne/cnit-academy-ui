import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/api";

export const useDeleteBlogById = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await api.delete(`/api/blog/${id}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userBlogs"] });
    },
  });
};
