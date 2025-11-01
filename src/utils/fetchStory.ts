import { ISbResponse } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";

//@ts-ignore
import type { StoryblokMultilinkLink } from "@/app/types/storyblok.d.ts";

const STORYBLOK_DOMAIN = "https://api.storyblok.com/v2/cdn/stories";
const token = process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN;

type VersionType = "draft" | "published";

const constructAPIUrl = (
  slug: string,
  version: string,
  resolve_relations?: [string]
) => {
  const relation = resolve_relations?.[0]
    ? `&resolve_relations=${resolve_relations?.[0]}`
    : "";

  return `${STORYBLOK_DOMAIN}${slug}?version=${version}&token=${token}${relation}`;
};

export const fetchStories = async (
  startsWith: string,
  version: VersionType = "published"
) => {
  if (!token) throw new Error("No Storyblok Token set");

  const response = await fetch(
    `${STORYBLOK_DOMAIN}?starts_with=${startsWith}&token=${token}&version=${version}`
  );

  const data = (await response.json()) as StoryblokMultilinkLink;
  return data.stories.map((story: any) => story.content);
};
