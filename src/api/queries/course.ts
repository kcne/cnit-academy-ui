import { api } from "../api";
import { Course } from "../types/course";

export const getCourses = async (): Promise<Course[]> => {
  const response = await api.get("/api/course/");
  return response.data.data;
};

export const getUserCourses = async (): Promise<Course[]> => {
  const response = await api.get("/api/course/userId/me");
  return response.data.data;
};
