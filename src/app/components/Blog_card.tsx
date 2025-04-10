import Link from "next/link";

const blogBox =
  "flex flex-col border-2 border-solid m-1 p-4 rounded-2xl hover:shadow-lg transition-shadow";

export default function BlogCard(props) {
  const { post } = props;
  return (
    <Link href={`/blogs/${post.slug}`}>
      <div className={blogBox}>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{post.blogDescription}</p>
        <div className="text-xs text-gray-500">
          <p>By: {post.createdBy}</p>
          <p>Published: {new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
}
