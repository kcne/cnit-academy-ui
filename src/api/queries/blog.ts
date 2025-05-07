import { api } from "../api"
import { BlogResponse, BlogPost } from "../types/blog"

export const getUserBlogs = async (userId: number | undefined): Promise<BlogResponse | null> => {
  if (!userId) return null
  const response = await api.get(`/api/blog/user/${userId}`)
  return response.data
}

export const updateBlogById = async (id: number, updatedBlog: BlogPost) => {
  const response = await api.patch(`/api/blog/user/${id}`, updatedBlog)
  return response.data
}

export const getBlogById = async (id: string | undefined): Promise<BlogPost | null> => {
  if (!id) return null
  const response = await api.get(`/api/blog/${id}`)
  return response.data
}