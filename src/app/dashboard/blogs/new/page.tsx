'use client';

import { BlogForm, BlogFormValues } from "../components/BlogForm";

export default function NewBlogPage() {

  // Define the submit handler for creating a new blog
  const handleCreateBlog = (data: BlogFormValues) => {
    console.log("Creating blog:", data);
    // TODO: Implement API call to create the blog
    alert("Create Blog Submitted! Check console.");
    // You might want to redirect or show a success message here
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold mb-6">Create New Blog Post</h1>
      {/* Use the shared form, pass the create handler */}
      <BlogForm
        onSubmit={handleCreateBlog}
        isSubmitting={false} // Replace with actual loading state from API hook later
      />
    </div>
  );
} 