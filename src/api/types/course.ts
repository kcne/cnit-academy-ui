export interface Lecture {
  id: number;
  title: string;
  content: string;
  vioUrl?: string;
  courseId: number;
  course: Course;
  craetedAt: string;
  coins: number;
}

export interface Course {
  id: number;
  title: string;
  description?: string;
  durationInHours?: number;
  createdAt: string;
  coins: number;
  lectures: Lecture[];
  createdBy: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
}
