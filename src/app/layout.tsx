import type { Metadata } from "next";

import Providers from "./components/Providers";
import TopNav from "./components/Navigation/TopNav";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/app/components/Storyblok/Page";
import Project from "@/app/components/Storyblok/Project";

import "./globals.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

const components = {
  page: Page,
  project: Project,
};

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  components,
  use: [apiPlugin],
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
          className="antialiased font-inter"
        >
          <div className="header-wrapper pb-36">
            <TopNav />
            {children}
          </div>
        </body>
      </html>
    </Providers>
  );
};

export default RootLayout;
