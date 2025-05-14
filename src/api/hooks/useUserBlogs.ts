import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteBlog, getUserBlogs, publishBlog } from "../queries/blog";
import { BlogResponse } from "../types/blog";

export const useUserBlogs = (userId?: number) => {
  const queryClient = useQueryClient();
  return {
    ...useQuery<BlogResponse | null>({
      queryKey: ["userBlogs", userId],
      queryFn: () => getUserBlogs(userId),
      enabled: !!userId,
    }),
    deleteBlog: useMutation({
      mutationFn: deleteBlog,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["userBlogs", userId] });
      },
    }),
    publishBlog: useMutation({
      mutationFn: publishBlog,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: ["userBlogs", userId] });
      },
    }),
  };
};

