"use client";
import { useCourses } from "@/api/hooks/useCourses";
import { CourseCard } from "../dashboard/courses/components/CourseCard";

function Courses() {
  const { data: courses } = useCourses();

  return (
    <div className="w-full lg:w-5/6 xl:w-2/3 mx-auto p-3 pr-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
      {courses?.map((el) => (
        <CourseCard
          course={el}
          className={"bg-gray-50 hover:-mt-1 hover:mb-1 hover:drop-shadow-sm"}
        ></CourseCard>
      ))}
    </div>
  );
}

export default Courses;
