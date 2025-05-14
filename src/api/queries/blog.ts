import { api } from "../api";
import { BlogResponse } from "../types/blog";

export async function getUserBlogs(
  userId?: number,
): Promise<BlogResponse | null> {
  if (!userId) return null;
  const response = await api.get(`/api/blog/user/${userId}`);
  return response.data;
}

export async function deleteBlog(userId?: number) {
  if (!userId) return null;
  const response = await api.delete(`/api/blog/admin/${userId}`);
  return response.data;
}

export async function publishBlog(userId?: number) {
  if (!userId) return null;
  const response = await api.put(`/api/blog/admin/${userId}/publish`);
  return response.data;
}
