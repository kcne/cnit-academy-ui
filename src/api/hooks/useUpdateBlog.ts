import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { updateBlog } from "../queries/blog";
import { BlogPost } from "../types/blog";

export const useUpdateBlog = (userId: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    (data: { id: number; updates: Partial<BlogPost> }) =>
      updateBlog(data.id, data.updates),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["userBlogs", userId] });
        router.push("/dashboard/blogs");
      },
      onError: (error) => {
        console.error("Failed to update blog:", error);
      },
    }
  );
};
