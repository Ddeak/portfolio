import { getStoryblokApi } from "@/lib/storyblok";
import { StoryblokStory } from "@storyblok/react/rsc";

const Home = async () => {
  try {
    const { data } = await fetchData();
    return (
      <div>
        <head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <StoryblokStory story={data.story} />
      </div>
    );
  } catch (e) {
    return <p> Something went wrong: {(e as Error).message}</p>;
  }
};

const fetchData = async () => {
  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/home`);
};

export default Home;
