"use client";
import { useParams } from "next/navigation";
import { BlogForm } from "@/app/dashboard/blog/components/blog-form";
import { useBlogById } from "@/api/hooks/useBlogById";
import { useUpdateBlog } from "@/api/hooks/useUpdateBlog";
import { useToast } from "@/hooks/use-toast";
import { blogFormSchema } from "@/schemas/schema";
import * as z from "zod";

export default function EditBlogPage() {
  const params = useParams();
  const id = params.id as string;
  const { toast } = useToast();

  const { data: blog, isLoading, isError } = useBlogById(id);
  const { mutate: updateBlog, isPending: isUpdating } = useUpdateBlog();

  if (isLoading) return <p>Loading blog post...</p>;
  if (isError || !blog) return <p>Blog not found.</p>;

  const defaultValues: Partial<z.infer<typeof blogFormSchema>> = {
    title: blog.title,
    slug: blog.slug,
    content: blog.content,
    blogDescription: blog.blogDescription,
    published: blog.published,
  };

  const handleSubmit = (values: z.infer<typeof blogFormSchema>) => {
    updateBlog(
      { ...blog, ...values },
      {
        onSuccess: () => {
          toast({ title: "Blog updated successfully" });
        },
        onError: () => {
          toast({ title: "Failed to update blog", variant: "destructive" });
        },
      }
    );
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Blog</h1>
      <BlogForm
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
        isLoading={isUpdating}
      />
    </div>
  );
}
