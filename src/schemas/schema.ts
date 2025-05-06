import { z } from "zod"

export const blogFormSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  slug: z.string().min(1, "Slug is required").max(100),
  content: z.string().min(1, "Content is required"),
  blogDescription: z.string().optional(),
  published: z.boolean().default(false),
})
export const settingsFormSchema = z.object({
  firstName: z.string().min(4, "First name must have at least 4 characters!").max(10),
  lastName: z.string().min(4, "Last name must have at least 5 characters!").max(12),
  language: z.enum(["en", "sr"], {
    message: "Please select a valid language",
  }),
})

export type BlogFormValues = z.infer<typeof blogFormSchema> 