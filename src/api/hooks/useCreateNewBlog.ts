import { useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { createBlog } from '../queries/blog';
import { BlogPost } from '../types/blog';

const useCreateNewBlog = (userId: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(
    (data: Partial<BlogPost>) => createBlog(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['userBlogs', userId] });
        router.push('/dashboard/blogs');
      },
      onError: (error) => {
        console.error("Failed to create blog:", error);
      },
    }
  );
};

export default useCreateNewBlog;
