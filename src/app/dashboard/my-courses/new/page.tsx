'use client';

import { CourseForm, CourseFormValues } from "../components/CourseForm";

export default function NewCoursePage() {

  // Define the submit handler for creating a new course
  const handleCreateCourse = (data: CourseFormValues) => {
    console.log("Creating course:", data);
    // TODO: Implement API call to create the course
    alert("Create Course Submitted! Check console.");
    // You might want to redirect or show a success message here
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Create New Course</h1>
      <CourseForm 
        onSubmit={handleCreateCourse} 
        isSubmitting={false} // Replace with actual loading state from API hook later
      />
    </div>
  );
}