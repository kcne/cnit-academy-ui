import { useQuery } from "@tanstack/react-query";
import { getUserCourses } from "../queries/course";
import { Course } from "../types/course";

export const useUserCourses = () => {
  return useQuery<Course[]>({
    queryKey: ["userCourses"],
    queryFn: getUserCourses,
  });
};
