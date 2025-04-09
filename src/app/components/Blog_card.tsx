import Link from "next/link";

export default function BlogCard(props) {
  const { post } = props;
  return (
    <>
      <Link href={""}>
        <div className="flex flex-row border-2 border-solid">
          <h3>{post.title}</h3>
          <p>{post.bio}</p>
          <div>
            <div>
              <h5>Prep Time</h5>
              <p>{post.prep_time}</p>
            </div>
            <div>
              <h5>Cook Time</h5>
              <p>{post.cook_time}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
