import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/navigation/navigation";
import { ChangeTheme } from "./theme";
const inter = Inter({ subsets: ["latin"] });
import "@/app/styles/prism-plus.css";
import "@/app/styles/prism-dracula.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`inter.className dark:bg-black dark:text-slate-400`}>
        <ChangeTheme>
          <Navigation />
          {children}
        </ChangeTheme>
      </body>
    </html>
  );
}
