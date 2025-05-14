"use client"

import { useCourses } from "@/api/hooks/useCourses"
import { CourseCard } from "../dashboard/courses/components/CourseCard"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { useRouter } from "next/navigation"
import { BookOpen } from "lucide-react"

export default function CoursesPage() {
  const { data: courses, isLoading, error } = useCourses()
  const router = useRouter()

  const handleCourseClick = (course : {id: number}) => {
    router.push(`/courses/${course.id}`)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Courses</h1>
          <p className="text-muted-foreground">Browse all available courses</p>
        </div>
        <Button>
          <BookOpen className="mr-2 h-4 w-4" />
          My Enrolled Courses
        </Button>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-64 w-full" />
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">Error loading courses</h2>
          <p className="text-muted-foreground">There was a problem loading the courses. Please try again later.</p>
        </div>
      )}

      {courses && courses.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">No courses found</h2>
          <p className="text-muted-foreground">There are no courses available at the moment.</p>
        </div>
      )}

      {courses && courses.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onClick={handleCourseClick} className="cursor-pointer" />
          ))}
        </div>
      )}
    </div>
  )
}
