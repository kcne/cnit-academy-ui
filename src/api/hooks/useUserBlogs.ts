import { useQuery } from "@tanstack/react-query"
import { getUserBlogs } from "../queries/blog"
import { BlogResponse } from "../types/blog"

export const useUserBlogs = (userId: number | undefined) => {
  return useQuery<BlogResponse | null>({
    queryKey: ["userBlogs", userId],
    queryFn: () => getUserBlogs(userId),
    enabled: !!userId
  })
} 