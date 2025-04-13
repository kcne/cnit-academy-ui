// src/lib/getBlogMetadata.ts

import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function getBlogMetadata() {
  const folder = path.join(process.cwd(), "blog_posts"); // cilja blog_posts folder iz root-a

  if (!fs.existsSync(folder)) {
    return null;
  }

  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const filePath = path.join(folder, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title || "Untitled",
      published: matterResult.data.published || false,
      blogDescription: matterResult.data.blogDescription || "",
      createdBy: matterResult.data.createdBy || "unknown",
      createdAt: matterResult.data.createdAt || new Date().toISOString(),
      updatedAt: matterResult.data.updatedAt || new Date().toISOString(),
      slug: filename.replace(".md", ""),
    };
  });

  return posts;
}
