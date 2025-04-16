"use client"
import { useUserBlogs } from "@/api/hooks/useUserBlogs";
import { BlogPost } from "@/api/types/blog";
import { useUser } from "@/app/providers/userContext";

export default function DashboardPage() {
    const { user } = useUser();
    // const { data, isLoading, error } = useUserBlogs(user?.id)
    
    return (
        <div>
            Blogs
        </div>
    );
}