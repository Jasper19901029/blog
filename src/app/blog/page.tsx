import Link from "next/link";
import { getPosts } from "../lib/utils/getposts";

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col justify-start items-start space-y-10">
      <ul className="flex flex-col justify-center mt-8">
        {posts.map((post) => (
          <li key={post.slug} className="">
            <Link
              href={`/blog/${post.slug}`}
              className="hover:text-slate-100 text-xl flex flex-col mb-8">
              <time className="text-sm mb-2">
                {post.date.toString().slice(3, 15)}
              </time>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
