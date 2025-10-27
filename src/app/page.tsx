import { StoryblokStory } from "@storyblok/react/rsc";
import { fetchStory } from "@/utils/fetchStory";

import AboutMe from "./components/AboutMe/AboutMe";
import Hero from "./components/Intro/Hero";
import Expertise from "./components/Expertise/Expertise";

type Params = Promise<{ slug?: string[] }>;

const Page = async ({ params }: { params: Params }) => {
  const slug = (await params).slug;
  const pageData = await fetchStory("published", slug);

  return (
    <>
      <div className="header-wrapper">
        <Hero />
        <Expertise />
        <AboutMe />
      </div>
      <div className="content">
        <StoryblokStory story={pageData.story} />
      </div>
    </>
  );
};

export default Page;
