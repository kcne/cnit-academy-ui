import { useQuery } from "@tanstack/react-query"
import { getBlogById } from "../queries/blog"
import { BlogPost } from "../types/blog"

export const useBlogById = (id: string | undefined) => {
  return useQuery<BlogPost | null>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id,
  })
}
