import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "@/app/components/Storyblok/Page";
import Project from "@/app/components/Storyblok/Project";

const components = {
  page: Page,
  project: Project,
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  components,
  use: [apiPlugin],
});
