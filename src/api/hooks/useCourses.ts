import { useQuery } from "@tanstack/react-query";
import { getCourses } from "../queries/course";
import { Course } from "../types/course";

export const useCourses = () => {
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: getCourses,
  });
};
