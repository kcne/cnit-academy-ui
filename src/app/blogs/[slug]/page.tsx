import Markdown from "markdown-to-jsx";
import getBlogMetadata from "@/lib/getBlogMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

import Link from "next/link";

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
    <>
      <div className="flex flex-row items-baseline mb-3">
        <Link href="/blogs">
          <h1 className="text-2xl font-bold text-primary hover:underline">
            Blogs
          </h1>
        </Link>
        <span className="mx-2 text-2xl">⮚</span>
        <Link href="#">
          <h1 className="text-2xl font-bold text-primary hover:underline">
            {title}
          </h1>
        </Link>
      </div>
      <main className={blogBox}>
        <article>
          <h2 className="text-xl font-bold tracking-tighter mb-2">{title}</h2>
          <p className="text-sm text-muted-foreground mb-4">
            By {createdBy} • {new Date(createdAt).toLocaleDateString()}
          </p>
          <Markdown>{post.content}</Markdown>
        </article>
      </main>
    </>
  );
}
