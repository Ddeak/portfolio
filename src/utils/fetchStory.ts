import { ISbResponse } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

const STORYBLOK_DOMAIN = "https://api.storyblok.com/v2/cdn/stories";

const constructAPIUrl = (slug: string, version: string, token?: string) => {
  if (!token) throw new Error("No Storyblok Token set");
  return `${STORYBLOK_DOMAIN}${slug}?version=${version}&token=${token}`;
};

export const fetchStory = async (
  version: "draft" | "published",
  slug?: string[]
) => {
  getStoryblokApi();

  return fetch(
    constructAPIUrl(
      `/${slug ? slug.join("/") : "home"}`,
      version,
      process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN
    ),
    {
      next: { tags: ["cms"] },
      cache: version === "published" ? "default" : "no-store",
    }
  ).then((res) => res.json()) as Promise<{ story: ISbResponse }>;
};
