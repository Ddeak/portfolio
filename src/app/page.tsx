import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/utils/fetchStory";

type Params = Promise<{ slug?: string[] }>;

const Page = async ({ params }: { params: Params }) => {
  const slug = (await params).slug;
  const pageData = await fetchStory("published", slug);

  return <StoryblokStory story={pageData.story} />;
}

export default Page;
