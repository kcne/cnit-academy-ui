import { updateBlog } from "../queries/blog";
import { BlogPost } from "../types/blog";
import { useMutation, useQueryClient } from "react-query";

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: Partial<BlogPost>) => {
      const response = await updateBlog(data.id, data);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["blog"]);
      },
    }
  );
};