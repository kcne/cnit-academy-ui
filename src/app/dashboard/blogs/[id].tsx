import { useRouter } from "next/router";
import { useGetBlog } from "@/api/hooks/useGetBlog";
import { useMutation, useQueryClient } from "react-query";
import { updateBlog } from "@/api/queries/blog";
import { BlogForm } from "../blog/components/blog-form";
import { BlogPost } from "@/api/types/blog";

const EditBlogPage = () => {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, isLoading, isError } = useGetBlog(id);
  const queryClient = useQueryClient();
  const { mutate, isLoading: isMutating, isError: isMutationError } = useMutation((variables: { id: string; data: Partial<BlogPost> }) => updateBlog(Number(variables.id), variables.data), {
    onSuccess: () => {
      queryClient.invalidateQueries("blog");
      router.push("/dashboard/blogs");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading blog data</div>;
  }

  if (!data) {
    return <div>Blog data not found</div>;
  }

  const handleSubmit = (data: Partial<BlogPost>) => {
    mutate({ id, data });
  };

  return (
    <div>
      <h1>Edit Blog Post</h1>
      {isMutating ? (
        <div>Loading...</div>
      ) : isMutationError ? (
        <div>Error updating blog data</div>
      ) : (
        <BlogForm defaultValues={data as Partial<BlogPost>} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default EditBlogPage;