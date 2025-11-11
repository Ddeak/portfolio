// app/[...slug]/page.tsx
import { notFound } from "next/navigation";
import { getStoryblokApi } from "@storyblok/react";
import StoryblokClientWrapper from "./StoryblokClientWrapper";

interface PageProps {
  params: { slug?: string[] };
}

const SlugPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!slug?.length || slug[0] === '.well-known') return null

  const slugString = slug.join("/");
  

  const sbApi = getStoryblokApi();
  if (!sbApi) throw new Error("Storyblok API not initialized");

  try {
    const { data } = await sbApi.get(`cdn/stories/${slugString}`, {
      version: "draft",
      resolve_links: "url",
    });

    return <StoryblokClientWrapper story={data.story} />;
  } catch (error) {
    console.error("Storyblok fetch error:", error);
    notFound();
  }

  return null;
};

export default SlugPage;
