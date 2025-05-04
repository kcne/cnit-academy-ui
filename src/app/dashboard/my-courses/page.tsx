'use client'; // Data table requires client-side interaction

import { DataTable } from "@/app/components/shared/data-table";
import { courseColumns, Course } from "./components/course-columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PlusCircle } from 'lucide-react';

// Hardcoded data for now - replace with API fetch later
const courses: Course[] = [
    {
        id: 1,
        title: "Introduction to Programming",
        description: "Learn the fundamentals of programming using Python.",
        durationInHours: 40,
        studentCount: 150,
        coins: 50
    },
    {
        id: 2,
        title: "Web Development Bootcamp",
        description: "Become a full-stack web developer with React and Node.js.",
        durationInHours: 120,
        studentCount: 250,
        coins: 100
    },
    {
        id: 3,
        title: "Data Science with Python",
        description: "Explore data analysis, visualization, and machine learning.",
        durationInHours: 80,
        studentCount: 180,
        coins: 75
    },
    {
        id: 4,
        title: "Advanced JavaScript Concepts",
        description: "Deep dive into closures, promises, and async/await.",
        durationInHours: 30,
        studentCount: 90,
        coins: 40
    },
];


export default function MyCoursesPage() {
    // TODO: Replace hardcoded data with API call using hooks (e.g., useUserCourses)
    const isLoading = false; // Placeholder
    const error = null; // Placeholder
    const data = courses; // Using hardcoded data

    // Add Loading/Error states similar to blogs page if fetching data
    // if (isLoading) { ... }
    // if (error) { ... }

    return (
        <div className="py-8 space-y-6">
             <div className="flex items-center justify-between">
                 <h1 className="text-3xl font-bold">My Courses</h1>
                 <Button asChild>
                     <Link href="/dashboard/my-courses/new">
                        <PlusCircle className="mr-2 h-4 w-4" /> Create New Course
                     </Link>
                 </Button>
             </div>
            <DataTable
                columns={courseColumns}
                data={data} // Use fetched or hardcoded data
                searchFilter // Enable search filter
                searchPlaceholder="Search courses by title..." // Set placeholder
                searchColumn="title" // Corrected prop name
            />
        </div>
    );
}