export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    sitemap: "https://blog-eta-fawn-89.vercel.app/sitemap.xml",
    host: "https://blog-eta-fawn-89.vercel.app/",
  };
}
