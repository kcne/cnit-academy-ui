import { api } from "../api";
import { Lecture } from "../types/course";

export const getLecture = async (id: number | undefined): Promise<Lecture> => {
  const response = await api.get(`/api/lecture/${id}`);
  return response.data.data;
};

export const getMyLectures = async (): Promise<Lecture[]> => {
  const response = await api.get("/api/lecture/my");
  return response.data.data;
};
