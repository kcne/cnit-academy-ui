"use client";
import { useCourses } from "@/api/hooks/useCourses";
import { CourseCard } from "./components/CourseCard";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const { data: courses } = useCourses();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">
        {t("coursesDashboard.available")}
      </h1>
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
        <p>{t("coursesDashboard.noavailable")}</p>
      )}
    </>
  );
}
