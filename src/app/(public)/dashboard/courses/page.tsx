"use client";
import { CourseCard } from "./components/CourseCard";
import { useUserCourses } from "@/api/hooks/useUserCourses";

export default function Home() {
  const { data: courses } = useUserCourses();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Available Courses</h1>
      {courses && courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full overflow-x-hidden">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={(course) => console.log("Course clicked:", course.title)}
            />
          ))}
        </div>
      ) : (
        <p>No courses available.</p>
      )}
    </>
  );
}
