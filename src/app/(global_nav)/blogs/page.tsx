import BlogCard from "@/app/components/Blog_card";
import getBlogMetadata from "../../../lib/getBlogMetadata";
export default function Blogs() {
  const postMetadata = getBlogMetadata();

  return (
    <>
      <h1>All Blogs</h1>
      <div>
        {postMetadata?.map((post, postIndex) => {
          return <BlogCard key={postIndex} post={post} />;
        })}
      </div>
    </>
  );
}
