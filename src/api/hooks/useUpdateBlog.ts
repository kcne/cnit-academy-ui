import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBlogById } from "../queries/blog";
import { BlogPost } from "../types/blog";

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedBlog: BlogPost) =>
      updateBlogById(updatedBlog.id, updatedBlog),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userBlogs"] });
    },
    onError: (error) => {
      console.error("Error updating blog:", error);
    },
  });
};
