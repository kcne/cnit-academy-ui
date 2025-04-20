import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  Row,
  Column,
  HeaderContext,
} from "@tanstack/react-table";

import { BlogPost } from "@/api/types/blog";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Pencil, Trash2, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/router";

const useBlogRouter = () => {
  const router = useRouter();
  return router;
};

const useBlogColumns = () => {
  const router = useBlogRouter();

  return [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: ({ column }: HeaderContext<BlogPost, unknown>) => {
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
      header: ({ column }: { column: Column<BlogPost> }) => {
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
      cell: ({ row }: { row: Row<BlogPost> }) => {
        return row.original.published ? "Published" : "Draft";
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }: { column: Column<BlogPost> }) => {
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
      cell: ({ row }: { row: Row<BlogPost> }) => {
        return new Date(row.original.createdAt).toLocaleDateString();
      },
    },
    {
      id: "actions",
      cell: ({ row }: { row: Row<BlogPost> }) => {
        const blog = row.original;

        return (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push(`/dashboard/blogs/edit/${blog.id}`)}
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
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
          </div>
        );
      },
    },
  ] as ColumnDef<BlogPost, unknown>[];
};

const BlogTable = ({ data }: { data: BlogPost[] }) => {
  const columns = useBlogColumns();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <h1>Blog Table</h1>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogTable;
