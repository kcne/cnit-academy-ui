import { useQuery } from "react-query";
import { getBlog } from "@/api/queries/blog";

export const useGetBlog = (id: string) => {
  return useQuery(
    ["blog", id],
    async () => {
      const response = await getBlog(parseInt(id));
      return response;
    },
    {
      enabled: !!id,
    }
  );
};