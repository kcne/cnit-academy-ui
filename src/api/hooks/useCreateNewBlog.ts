import { useMutation } from 'react-query';
import { createBlog } from '../queries/blog';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { BlogPost } from '../types/blog';

const useCreateNewBlog = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { mutate } = useMutation(
    async (data: Partial<BlogPost>) => {
      return createBlog(data);
    },
    {
      onSuccess: () => {
        router.push('/dashboard/blogs');
        queryClient.invalidateQueries({ queryKey: ['userBlogs'] });
      },
    }
  );

  return { mutate };
};

export default useCreateNewBlog;