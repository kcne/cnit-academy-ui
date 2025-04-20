import { api } from "../api"
import { BlogPost, BlogResponse } from "../types/blog"

export const getUserBlogs = async (userId: number | undefined): Promise<BlogResponse | null> => {
  if (!userId) return null
  const response = await api.get(`/api/blog/user/${userId}`)
  return response.data
} 

export const getBlog = async (id: number | undefined): Promise<BlogResponse | null> => {
  if (!id) return null
  const response = await api.get(`/api/blog/${id}`)
  return response.data
}

export const updateBlog = async (id: number | undefined, data: Partial<BlogPost>): Promise<BlogPost | null> => {
  if (!id) return null
  const response = await api.put(`/api/blog/${id}`, data)
  return response.data
}