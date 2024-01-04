import Link from "next/link";
import { getPosts } from "../lib/utils/getposts";

export async function generateStaticParams() {
  const posts = await getPosts();

  // The params to pre-render the page with.
  // Without this, the page will be rendered at runtime
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <time>{post.date.toString().slice(3, 15)}</time>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
