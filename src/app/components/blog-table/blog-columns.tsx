import { ColumnDef } from "@tanstack/react-table";
import { BlogPost } from "@/api/types/blog";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
// ====  FOR DELETE BTN ====
import { useState } from "react";
import DeleteDialog from "./delete-dialog";
import { useDeleteBlogById } from "../../../hooks/useDeleteBlog";

export const blogColumns: ColumnDef<BlogPost>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "published",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.original.published ? "Published" : "Draft";
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created At
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return new Date(row.original.createdAt).toLocaleDateString();
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const blog = row.original;
      // ==  added for deleteBtn
      const [open, setOpen] = useState(false);
      const { mutate } = useDeleteBlogById();

      const handleDelete = () => {
        mutate(blog.id);
        setOpen(false);
      };

      return (
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Trash2 className="h-4 w-4" />
          </Button>

          {blog.published ? (
            <Button variant="ghost" size="icon">
              <EyeOff className="h-4 w-4" />
            </Button>
          ) : (
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
          )}

          <DeleteDialog
            open={open}
            title="Delete Blog"
            description="Are you sure you want to delete this blog? This action cannot be undone."
            onCancel={() => setOpen(false)}
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];
