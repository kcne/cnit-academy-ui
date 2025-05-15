"use client";

import type { FC } from "react";
import { Clock, Coins, BookOpen } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { Course } from "@/api/types/course";

interface CourseCardProps {
  course: Course;
  onClick?: (course: Course) => void;
  className?: string;
}

export const CourseCard: FC<CourseCardProps> = ({
  course,
  onClick,
  className = "",
}) => {
  const {
    //id,
    title,
    description,
    durationInHours,
    createdAt,
    coins,
    lectures,
  } = course;

  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  return (
    <Card
      className={`overflow-hidden transition-all hover:shadow-md ${className}`}
      onClick={() => onClick?.(course)}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold line-clamp-2">
            {title}
          </CardTitle>
          <Badge variant="outline" className="bg-primary/10 text-primary">
            <Coins className="h-3 w-3 mr-1" />
            {coins}
          </Badge>
        </div>
        <p>
          Instructor: {course.createdBy.firstName} {course.createdBy.lastName}
        </p>
        <CardDescription className="text-xs text-muted-foreground">
          Created {timeAgo}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>
              {durationInHours?.toFixed(1)}{" "}
              {durationInHours === 1 ? "hour" : "hours"}
            </span>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span>
              {lectures.length} {lectures.length === 1 ? "lecture" : "lectures"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
