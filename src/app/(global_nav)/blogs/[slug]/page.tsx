import Markdown from "markdown-to-jsx";
import getBlogMetadata from "@/lib/getBlogMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

function getPostContent(slug: string) {
  const folder = path.join(process.cwd(), "blog_posts"); // cilja blog_posts folder
  const file = path.join(folder, `${slug}.md`);

  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getBlogMetadata("blog_posts");
  return posts?.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " * " + params?.slug : "";
  return {
    title: `PatikaAcademy ${id.replaceAll("_", " ")}`,
  };
}

export default function Blogs(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <>
      <main>
        <article>
          <Markdown>{post.content}</Markdown>
        </article>
      </main>
    </>
  );
}
