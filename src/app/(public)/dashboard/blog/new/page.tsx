"use client"

import { useRouter } from "next/navigation"
import { BlogForm } from "../components/blog-form"
import { api } from "@/api/api"
import { useUser } from "@/app/providers/userContext"
import React from "react"
import { BlogFormValues } from "@/app/(public)/dashboard/blog/schema"

export default function NewBlogPage() {
  const router = useRouter()
  const { user } = useUser()
  const [isLoading, setIsLoading] = React.useState(false)

  const onSubmit = async (values: BlogFormValues) => {
    try {
      setIsLoading(true)
      await api.post("/api/blog/admin", {
        ...values,
        userId: user?.id,
      })
      router.push("/dashboard/blogs")
    } catch (error) {
      console.error("Error creating blog:", error)
      // TODO: Add user-facing error handling (e.g., toast notification)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Create New Blog</h1>
        <p className="text-muted-foreground">
          Fill in the details below to create a new blog post.
        </p>
      </div>
      <BlogForm onSubmit={onSubmit} isLoading={isLoading} />
    </div>
  )
} 
