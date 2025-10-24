import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StoryblokProvider from "./components/Storyblok/Provider";
import Title from "./components/Title";

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
    <StoryblokProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="header-wrapper">
            <Title />
          </div>
          <div className="content">{children}</div>
        </body>
      </html>
    </StoryblokProvider>
  );
};

export default RootLayout;
