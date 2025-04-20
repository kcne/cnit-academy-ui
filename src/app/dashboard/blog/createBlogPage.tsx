import { useRouter } from 'next/router';
import { BlogForm } from '../blog/components/blog-form';
import { BlogFormValues } from './schema';
import useCreateNewBlog from '@/api/hooks/useCreateNewBlog';

const CreateBlogPage = () => {
  const router = useRouter();
  const { mutate, isLoading, error } = useCreateNewBlog(router.query.userId as string);

  const handleSubmit = (data: BlogFormValues) => {
    mutate(data);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error creating blog</div>;
  }

  return (
    <div>
      <h1>Create New Blog Post</h1>
      <BlogForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateBlogPage;