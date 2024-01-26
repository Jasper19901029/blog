import { getPost } from "@/app/lib/utils/getposts";
import PostBody from "@/mdx/postbody";
import { notFound } from "next/navigation";
import TableOfContents from "./tableofcontents";
export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);
  // notFound is a Next.js utility
  if (!post) return notFound();
  // Pass the post contents to MDX
  return (
    <article className="space-y-4 flex flex-col items-center">
      <p>{post?.title}</p>
      <div className="transition-colors lg:flex lg:flex-row lg:space-x-8 w-3/5">
        <div>
          <PostBody>{post?.body}</PostBody>
        </div>
        <aside>
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <TableOfContents source={post.body} />
          </div>
        </aside>
      </div>
    </article>
  );
}
