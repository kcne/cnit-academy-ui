'use client';

import { notFound } from 'next/navigation';
import { CourseForm, CourseFormValues } from "../components/CourseForm"; // Import shared form

// --- Mock Data (Keep for now, replace with actual API fetch) ---
const coursesData = [
    {
        id: 1,
        title: "Introduction to Programming",
        description: "Learn the fundamentals of programming using Python.",
        durationInHours: 40,
        studentCount: 150,
        coins: 50,
        lectures: [
            { id: 1, title: "Lecture 1: Introduction", content: "Content for lecture 1...", videoUrl: "https://example.com/video1", coins: 5 },
            { id: 2, title: "Lecture 2: Variables & Data Types", content: "Content for lecture 2...", videoUrl: "https://example.com/video2", coins: 5 },
        ]
    },
    {
        id: 2,
        title: "Web Development Bootcamp",
        description: "Become a full-stack web developer with React and Node.js.",
        durationInHours: 120,
        studentCount: 250,
        coins: 100,
        lectures: [
            { id: 3, title: "Module 1: HTML & CSS", content: "...", videoUrl: "...", coins: 10 },
        ]
    },
];
// --- End Mock Data ---

interface CourseDetailPageProps {
    params: {
        id: string;
    };
}

export default function CourseDetailPage({ params }: CourseDetailPageProps) {
    const courseId = parseInt(params.id, 10);
    // In a real app, fetch course data based on courseId (e.g., using a hook)
    // const { data: course, isLoading, error } = useFetchCourse(courseId);
    const course = coursesData.find(c => c.id === courseId);
    const isLoading = false; // Placeholder for loading state
    const isSubmitting = false; // Placeholder for submission state

    // Define the submit handler for updating the course
    const handleUpdateCourse = (data: CourseFormValues) => {
        console.log('Updating course:', data);
        // TODO: Implement API call to update the course with data
        alert("Course Update Submitted! Check console.");
        // Handle success/error, maybe show a toast notification
    }

    if (isNaN(courseId)) {
        notFound();
    }

    // Add loading state
    if (isLoading) {
        return <div className="container mx-auto py-8">Loading course data...</div>;
    }

    // Handle case where course is not found after loading
    if (!course && !isLoading) {
        notFound();
    }

    return (
        <div className="container mx-auto py-8">
            {/* Keep the heading or adjust as needed */}
            {/* <h1 className="text-3xl font-bold mb-6">Edit Course</h1> */}

            {/* Render the shared form with initial data and update handler */}
            <CourseForm
                initialData={course} // Pass fetched data
                onSubmit={handleUpdateCourse}
                isSubmitting={isSubmitting} // Pass submission loading state
            />
        </div>
    );
}
