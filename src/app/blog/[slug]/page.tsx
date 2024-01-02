import { getPost } from "@/app/lib/utils/getposts";
import PostBody from "@/mdx/postbody";
import { notFound } from "next/navigation";
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
  return <PostBody>{post?.body}</PostBody>;
}
