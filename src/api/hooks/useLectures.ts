import { useQuery } from "@tanstack/react-query";
import { getLecture } from "../queries/lecture";
import { getMyLectures } from "../queries/lecture";
import { Lecture } from "../types/course";


export const useLectures = (id: number | undefined) => {
  return useQuery<Lecture>({
    queryKey: ["lecture", id],
    queryFn: () => getLecture(id),
  });
};

export const useMyLectures = () => {
  return useQuery<Lecture[]>({
    queryKey: ["lectures"],
    queryFn: getMyLectures,
    });
  };


/*
import { Lecture } from "@/api/types/course";

export const useLectures = () => {
  return {
    data: {
      id: 1,
      title: "Introduction to React",
      content: "This is the content of the lecture. It provides additional details and resources.",
      vioUrl: "https://www.w3schools.com/html/mov_bbb.mp4", 
      courseId: 101,
      course: {
        id: 101,
        title: "React for Beginners",
        description: "A beginner-friendly course to learn React.",
        durationInHours: 5,
        createdAt: "2025-01-01T00:00:00Z",
        coins: 50,
        lectures: [],
      },
      craetedAt: "2025-05-01T12:00:00Z",
      coins: 10,
    } as Lecture,
  };
};

export const useMyLectures = () => {
  return {
    data: [
      {
        id: 1,
        title: "Introduction to React",
        content: "Learn the basics of React.",
        vioUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        courseId: 101,
        course: {
        id: 101,
        title: "React for Beginners",
        description: "A beginner-friendly course to learn React.",
        durationInHours: 5,
        createdAt: "2025-01-01T00:00:00Z",
        coins: 50,
        lectures: [],
      },
        craetedAt: "2025-05-01T12:00:00Z",
        coins: 10,
      },
      {
        id: 2,
        title: "React Components",
        content: "Learn about components in React.",
        vioUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
        courseId: 101,
        course: {
        id: 101,
        title: "React for Beginners",
        description: "A beginner-friendly course to learn React.",
        durationInHours: 5,
        createdAt: "2025-01-01T00:00:00Z",
        coins: 50,
        lectures: [],
      },
        craetedAt: "2025-05-01T12:00:00Z",
        coins: 10,
      },
    ],
  };
};
*/