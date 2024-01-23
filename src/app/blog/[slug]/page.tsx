import { getPost } from "@/app/lib/utils/getposts";
import PostBody from "@/mdx/postbody";
import { notFound } from "next/navigation";
import style from "./postbody.module.css";
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
    <div className="p-10">
      <p>{post?.title}</p>
      <div
        className="pb-8 transition-colors lg:flex lg:flex-row lg:"
        style={{ gridTemplateRows: "auto 1fr" }}>
        <div className=" lg:grid lg:grid-rows-1 post-body">
          <PostBody>{post?.body}</PostBody>
        </div>
        <aside>
          <div className="hidden lg:sticky lg:top-24 lg:col-span-1 lg:block">
            <TableOfContents source={post.body} />
          </div>
        </aside>
      </div>
    </div>
  );
}
