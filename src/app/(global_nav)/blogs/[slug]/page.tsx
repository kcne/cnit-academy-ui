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
  const posts = getBlogMetadata();
  return posts?.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params }) {
  const id = params?.slug ? " * " + params?.slug : "";
  return {
    title: `PatikaAcademy ${id.replaceAll("_", " ")}`,
  };
}

const blogBox =
  "flex flex-col border-2 border-solid m-1 p-4 rounded-2xl hover:shadow-lg transition-shadow";

export default function Blogs({ params }) {
  const slug = params.slug;
  const post = getPostContent(slug);
  const { title, createdBy, createdAt } = post.data;

  return (
    <main className={blogBox}>
      <article>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-sm text-gray-500 mb-4">
          By {createdBy} • {new Date(createdAt).toLocaleDateString()}
        </p>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
