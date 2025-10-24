import { StoryblokComponent, useStoryblokState, getStoryblokApi } from "@storyblok/react";

const Home = ({story}: any) => {
  story = useStoryblokState(story, {
   resolveRelations: ["blog"],
 });
 
 return (
   <div>
     <head>
       <title>Create Next App</title>
       <link rel="icon" href="/favicon.ico" />
     </head>
     <StoryblokComponent blok={story.content} />
   </div>
 );
}

export async function getStaticProps() {
 let slug = "home";
 const storyblokApi = getStoryblokApi()
 let { data } = await storyblokApi.get(`cdn/stories/${slug}`, {
   version: "draft",
   resolve_relations: ["page"], // or 'draft'
 })
 return {
   props: {
     story: data ? data.story : false,
     key: data ? data.story.id : false,
   },
   revalidate: 3600, // revalidate every hour
 };
}

export default Home
