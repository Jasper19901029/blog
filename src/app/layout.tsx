import "./globals.css";
import Navigation from "@/app/components/navigation/navigation";
import { ChangeTheme } from "./theme";
import "@/app/styles/prism-plus.css";
import "@/app/styles/prism-dracula.css";

export const metadata = {
  metadataBase: new URL("https://blog-eta-fawn-89.vercel.app/"),
  title: { template: "%s | Jasper's Blog", default: "Jasper's Blog" },
  description: "這是關於Jasper在學習各種軟體開發的筆記",
  openGraph: {
    title: "Jasper's blog",
    url: "https://blog-eta-fawn-89.vercel.app/",
    siteName: "Jasper's website",
    locale: "zh-TW",
    type: "website",
    images: [
      {
        url: "",
        alt: "Jasper's site",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    title: "Jasper",
    card: "summary_large_image",
    creator: "@Jasper",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="dark:text-slate-400 flex flex-col justify-center w-full items-center font-mono">
        <ChangeTheme>
          <Navigation />

          {children}
        </ChangeTheme>
      </body>
    </html>
  );
}
