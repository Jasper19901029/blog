import matter from "gray-matter";
// import { readFile } from "fs";
import { readFile, readdir } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  body: string;
  lastModified?: number;
  views?: number;
  // Third party only
  isThirdParty?: boolean;
  href?: string;
};

export const getPosts = cache(async () => {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = await readdir(postsDirectory);
  const fileNamesWithoutMdOrMdx = await fileNames.map((fileName) => {
    return fileName.replace(/(md|mdx)$/, "");
  });

  const postsWithMetadata = await Promise.all(
    fileNames
      .filter(
        (file) => path.extname(file) === ".md" || path.extname(file) === ".mdx"
      )
      .map(async (file) => {
        const filePath = `${postsDirectory}/${file}`;
        const postContent = await readFile(filePath, "utf-8");
        const { data, content } = matter(postContent);

        return { ...data, body: content } as Post;
      })
  );

  const filtered = postsWithMetadata
    .filter((post) => post !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0
    ) as Post[];
  return filtered;
});

export async function getPost(slug: string) {
  const posts = await getPosts();

  return posts.find((post) => post.slug === slug);
}
