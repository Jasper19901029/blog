import { getPost } from "@/app/lib/utils/getposts";
import PostBody from "@/mdx/postbody";
import { notFound } from "next/navigation";
import TableOfContents from "./tableofcontents";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: "Jasper's website",
      description: `${post?.title}、${post?.description}`,
      url: `https://blog-eta-fawn-89.vercel.app/blog/${post?.slug}`,
      siteName: "Jasper's website",
      locale: "zh-TW",
      type: "website",
      images: [
        {
          url: "",
          alt: "Jasper's blog web",
        },
      ],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <article className="w-full space-y-4 flex flex-col items-center mb-8">
      <p className="text-xl lg:text-3xl mt-5">{post?.title}</p>
      <div className="w-full transition-colors lg:flex lg:flex-row lg:justify-center">
        <div className="px-10 lg:w-6/12">
          <PostBody>{post?.body}</PostBody>
        </div>
        <aside>
          <div className="hidden lg:sticky lg:top-24 lg:block lg:ml-20">
            <TableOfContents source={post.body} />
          </div>
        </aside>
      </div>
    </article>
  );
}
