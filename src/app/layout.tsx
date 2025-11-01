import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Providers from "./components/Providers";
import TopNav from "./components/Navigation/TopNav";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/app/components/Storyblok/Page";
import Blog from "@/app/components/Storyblok/Blog";
import FeaturedBlogs from "@/app/components/Storyblok/FeaturedBlogs";
import Project from "@/app/components/Storyblok/Project";

const components = {
  page: Page,
  recipe: Blog,
  featuredBlogs: FeaturedBlogs,
  project: Project,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  components,
  use: [apiPlugin],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Deak - Portfolio",
  description: "Senior Frontend Developer",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="header-wrapper">
            <TopNav />
            {children}
          </div>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
