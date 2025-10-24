import Head from "next/head";
import {
  StoryblokComponent,
  useStoryblokState,
  getStoryblokApi,
  ISbStoryData,
} from "@storyblok/react";
import {
  SbBlokData,
} from '@storyblok/react';
import { Page as PageType } from "../types/storyblok";
import { Params } from "next/dist/server/request/params";

interface PageProps {
  story: ISbStoryData;
}

const SlugPage = ({ story }: PageProps) => {
  //@ts-ignore
  story = useStoryblokState(story, {
    resolveRelations: ["page"],
  });

  return (
    <div>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="text-4xl">{story ? story.name : "My Site"}</h1>
      </header>
      <StoryblokComponent blok={story.content} />
    </div>
  );
};

type PropsType = {
  params: Params
}

export async function getStaticProps({ params }: PropsType) {
  const slugArray = Array.isArray(params.slug) ? params.slug : [params.slug];

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slugArray}`, {
    version: "draft", // or published
    resolve_relations: ["blog"],
  });
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}

export async function getStaticPaths() {
  // get all links from Storyblok

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/links/`);

  let paths: any[] = [];
  // create a routes for every link
  Object.keys(data.links).forEach((linkKey) => {
    // do not create a route for folders or the home (index) page
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
      return;
    }
    // get array for slug because of catch all
    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");
    // cretes all the routes
    paths.push({ params: { slug: splittedSlug } });
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export default SlugPage
