'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import dynamic from "next/dynamic"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
// Import MarkdownEditor dynamically
// import MarkdownEditor from "@/components/MarkdownEditor"
import { blogFormSchema } from "@/schemas/schema"

// Dynamically import MarkdownEditor with SSR disabled
const MarkdownEditor = dynamic(() => import("@/components/MarkdownEditor"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

// Infer the type from the schema
export type BlogFormValues = z.infer<typeof blogFormSchema>;

interface BlogFormProps {
  // Accept onSubmit handler
  onSubmit: (values: BlogFormValues) => void;
  // Accept initial data for editing
  initialData?: Partial<BlogFormValues>;
  // Accept loading state
  isSubmitting?: boolean;
}

// Default values for creating a new blog
const defaultValues: Partial<BlogFormValues> = {
    title: "",
    slug: "",
    content: "",
    blogDescription: "",
    published: false,
};


export function BlogForm({ onSubmit, initialData, isSubmitting = false }: BlogFormProps) {
    const isEditing = !!initialData?.id; // Check if editing based on presence of id (add id to schema if needed for edit)

    const form = useForm<BlogFormValues>({
        resolver: zodResolver(blogFormSchema),
        defaultValues: initialData || defaultValues, // Use initial data if provided
        mode: "onChange",
    });

    // Use the passed onSubmit handler
    const handleFormSubmit = (data: BlogFormValues) => {
        onSubmit(data);
    };

  return (
    <Form {...form}>
      {/* Pass external onSubmit to react-hook-form's handleSubmit */}
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-8 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter blog title" {...field} />
                </FormControl>
                <FormDescription>
                  This is your blog title. Make it catchy!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Slug</FormLabel>
                <FormControl>
                  <Input placeholder="Enter blog slug" {...field} />
                </FormControl>
                <FormDescription>
                  This will be used in the URL. Use hyphens instead of spaces.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="blogDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter a brief description of your blog"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                A short description of your blog post.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                {/* Use dynamically imported editor */}
                <div className="rounded-md border bg-background">
                  <MarkdownEditor
                    markdown={field.value}
                    onChange={field.onChange}
                  />
                </div>
              </FormControl>
              <FormDescription>
                Write your blog content using markdown.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="published"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Publish</FormLabel>
                <FormDescription>
                  Make your blog visible to the public.
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-end">
           {/* Adjust button text and state based on props */}
           <Button type="submit" disabled={isSubmitting}>
               {isSubmitting ? (isEditing ? 'Saving...' : 'Creating...') : (isEditing ? 'Save Changes' : 'Create Blog')}
           </Button>
        </div>
      </form>
    </Form>
  )
} 