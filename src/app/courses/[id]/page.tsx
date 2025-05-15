"use client";

import { useParams } from "next/navigation";
import { useCourses } from "@/api/hooks/useCourses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import { Clock, Coins, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CourseViewSkeleton = () => {
  return (
    <div className="container max-w-4xl mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="h-4 w-32" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="h-4 w-64" />
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            <Clock className="mr-2 h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </p>
          <p>
            <Coins className="mr-2 h-4 w-4" />
            <Skeleton className="h-4 w-32" />
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default function CourseView() {
  const params = useParams();
  const courseId = Number(params.id);
  const { data: courses, isLoading, error } = useCourses();

  if (isLoading) {
    return <CourseViewSkeleton />;
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
    );
  }

  if (courses && courses.length > 0) {
    const course = courses.find((c) => c.id === courseId);

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
      );
    }

    return (
      <div className="container max-w-4xl mx-auto py-8 px-4">
        <Card>
          <CardHeader>
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <Clock className="mr-2 h-4 w-4" />
              {formatDistanceToNow(new Date(course.createdAt))}
            </p>
            <p>
              <Coins className="mr-2 h-4 w-4" />
              {course.coins} coins
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

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
  );
}