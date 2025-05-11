import { api } from "../api";
import { Lecture } from "../types/course";

export const getLecture = async (): Promise<Lecture> => {
  const response = await api.get("/api/lecture/my");
  return response.data.data;
};
