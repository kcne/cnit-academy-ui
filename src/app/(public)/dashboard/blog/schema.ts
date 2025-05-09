import { z } from "zod"

export const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  slug: z.string().min(1, "Slug is required").max(100),
  content: z.string().min(1, "Content is required"),
  blogDescription: z.string().optional(),
  published: z.boolean().default(false),
})

export type BlogFormValues = z.infer<typeof blogFormSchema> 