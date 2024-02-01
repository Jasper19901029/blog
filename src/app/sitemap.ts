import { MetadataRoute } from "next";
import { getPosts } from "@/app/lib/utils/getposts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  const blogs = posts.map((post) => ({
    url: `https://blog-eta-fawn-89.vercel.app/${post.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  const routes = ["", "/about", "/blog"].map((route) => ({
    url: `https://blog-eta-fawn-89.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));
  return [...routes, ...blogs];
}
