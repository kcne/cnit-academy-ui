import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LecturePage({
  title = "Introduction to Modern Web Development",
  content = "In this introductory lecture, we will explore the fundamentals of modern web development.",
  lectureNumber = 1,
  totalLectures = 12,
  topics = [
    "History of web development and how we got here",
    "Overview of modern frontend frameworks",
    "Introduction to server-side rendering and static site generation",
    "The importance of performance and accessibility",
  ],
  videoUrl = "/path/to/lecture-video.mp4",
  posterUrl = "/placeholder.svg?height=720&width=1280",
  captionsUrl = "/path/to/captions.vtt",
  resources = [
    { title: "Lecture slides (PDF)", url: "#" },
    { title: "Code examples (GitHub)", url: "#" },
    { title: "Additional reading materials", url: "#" },
  ],
  courseUrl = "#",
}: {
  title?: string;
  content?: string;
  lectureNumber?: number;
  totalLectures?: number;
  topics?: string[];
  videoUrl?: string;
  posterUrl?: string;
  captionsUrl?: string;
  resources?: Array<{ title: string; url: string }>;
  courseUrl?: string;
}) {
  const hasPrevious = lectureNumber > 1;
  const hasNext = lectureNumber < totalLectures;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <Link
          href={courseUrl}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Back to course
        </Link>

        <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground">
            Lecture {lectureNumber} of {totalLectures}
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled={!hasPrevious}>
              <ChevronLeft className="mr-1 h-4 w-4" />
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled={!hasNext}>
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Card className="mb-8">
        <CardContent className="p-0">
          <div className="relative w-full aspect-video bg-black">
            <video
              className="w-full h-full"
              controls
              preload="metadata"
              poster={posterUrl}
            >
              <source src={videoUrl} type="video/mp4" />
              <track
                src={captionsUrl}
                kind="subtitles"
                srcLang="en"
                label="English"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Lecture Description</h2>
          <div className="prose max-w-none">
            <p>{content}</p>
            {topics && topics.length > 0 && (
              <>
                <p>Topics covered in this lecture include:</p>
                <ul>
                  {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                  ))}
                </ul>
              </>
            )}
            <p>
              By the end of this lecture, you will have a solid understanding of
              the current web development landscape and be ready to dive deeper
              into specific technologies and techniques.
            </p>
          </div>
        </div>

        {resources && resources.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Resources</h2>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <Link
                    href={resource.url}
                    className="text-primary hover:underline flex items-center"
                  >
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
