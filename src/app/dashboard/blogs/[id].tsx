import { useRouter } from "next/router";

const EditBlogPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <div>
      <h1>Edit Blog Post</h1>
      <p>ID: {id}</p>
    </div>
  );
};

export default EditBlogPage;