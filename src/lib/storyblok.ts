import { storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "../app/components/Storyblok/Page";
import Blog from "../app/components/Storyblok/Blog";
import FeaturedBlogs from "../app/components/Storyblok/FeaturedBlogs";

const components = {
  page: Page,
  recipe: Blog,
  featuredBlogs: FeaturedBlogs,
};

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_CONTENT_API_ACCESS_TOKEN,
  components,
  use: [apiPlugin],
});
