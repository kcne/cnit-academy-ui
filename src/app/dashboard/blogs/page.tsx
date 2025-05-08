"use client"
import { useUserBlogs } from "@/api/hooks/useUserBlogs";
import { blogColumns } from "@/app/components/blog-table/blog-columns";
import { DataTable } from "@/app/components/shared/data-table";
import { useUser } from "@/app/providers/userContext";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const { user } = useUser();
    const { data, isLoading, error } = useUserBlogs(user?.id)

    if (isLoading) {
        return (
            <div className="space-y-4">
                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="h-[400px] w-full" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-red-500">
                Error loading blogs: {error.message}
            </div>
        )
    }

    if (!data?.data || data.data.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-muted-foreground">No blogs found. Create your first blog post!</p>
            </div>
        )
    }
    
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">My Blogs</h1>
                <Button asChild>
                     <Link href="/dashboard/blogs/new">
                        <PlusCircle className="mr-2 h-4 w-4" /> Create New Blog
                     </Link>
                 </Button>
            </div>
            <DataTable
                columns={blogColumns}
                data={data.data}
                searchFilter
                searchPlaceholder="Search blogs..."
            />
        </div>
    );
}