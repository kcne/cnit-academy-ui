import { api } from "../api"
import { BlogResponse } from "../types/blog"

export const getUserBlogs = async (userId: number | undefined): Promise<BlogResponse | null> => {
  if (!userId) return null
  const response = await api.get(`/api/blog/user/${userId}`)
  return response.data
} 