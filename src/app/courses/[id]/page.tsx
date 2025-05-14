"use client"

import { useParams } from "next/navigation"
import { useCourses } from "@/api/hooks/useCourses"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { formatDistanceToNow } from "date-fns"
import { BookOpen, Clock, Coins, Play, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CourseView() {
  const params = useParams()
  const courseId = Number(params.courseId)
  const { data: courses, isLoading, error } = useCourses()

  if (isLoading) {
    return <CourseViewSkeleton />
  }

  if (error || !courses) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">Error loading course</h2>
          <p className="text-muted-foreground mb-4">There was a problem loading the course details.</p>
          <Button asChild>
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-2">Course not found</h2>
          <p className="text-muted-foreground mb-4">{`The course you're looking for doesn't exist.`}</p>
          <Button asChild>
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  const timeAgo = formatDistanceToNow(new Date(course.createdAt), {
    addSuffix: true,
  })

  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Button variant="ghost" size="sm" asChild className="mb-6 hover:bg-transparent">
        <Link href="/courses">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Courses
        </Link>
      </Button>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <CardTitle className="text-3xl font-bold">{course.title}</CardTitle>
              <CardDescription className="text-sm mt-1">Created {timeAgo} • Instructor: Emin Kocan</CardDescription>
            </div>
            <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm">
              <Coins className="h-4 w-4 mr-2" />
              {course.coins} coins
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          {course.description && <p className="text-muted-foreground mb-6">{course.description}</p>}

          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>
                {course.durationInHours?.toFixed(1)} {course.durationInHours === 1 ? "hour" : "hours"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <BookOpen className="h-5 w-5" />
              <span>
                {course.lectures.length} {course.lectures.length === 1 ? "lecture" : "lectures"}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

<div className="mb-6">
  <h2 className="text-2xl font-bold mb-4">Course Content</h2>
  {course.lectures.map((lecture) => (
    <div key={lecture.id} className="mb-6">
      <h3 className="font-medium">{lecture.title}</h3>
      <div className="flex items-center gap-4 mt-1">
        {lecture.vioUrl && (
          <span className="text-xs text-muted-foreground flex items-center">
            <Play className="h-3 w-3 mr-1" /> Video lecture
          </span>
        )}
        <span className="text-xs text-muted-foreground flex items-center">
          <Coins className="h-3 w-3 mr-1" /> {lecture.coins} coins
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-4">{lecture.content}</p>
      {lecture.vioUrl && (
        <Button variant="outline" size="sm">
          <Play className="h-4 w-4 mr-2" />
          Watch Lecture
        </Button>
      )}
    </div>
  ))}
</div>

<Separator className="my-8" />

<div className="flex justify-between items-center">
  <div>
    <h3 className="font-semibold text-lg">Ready to start learning?</h3>
    <p className="text-sm text-muted-foreground">Enroll now to access all course materials</p>
  </div>
  <Button size="lg">
    Enroll for {course.coins} <Coins className="ml-2 h-4 w-4" />
  </Button>
</div>
</div>
  )
}

function CourseViewSkeleton() {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <div className="mb-6 h-9 w-32">
        <Skeleton className="h-full w-full" />
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-40" />
            </div>
            <Skeleton className="h-6 w-24" />
          </div>
        </CardHeader>

        <CardContent>
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4 mb-6" />

          <div className="flex gap-6">
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-24" />
          </div>
        </CardContent>
      </Card>

      <div className="mb-6">
        <Skeleton className="h-8 w-40 mb-4" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-16 w-full" />
          ))}
        </div>
      </div>
    </div>
  )
}