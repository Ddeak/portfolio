import {StoryblokComponent, storyblokEditable} from "@storyblok/react";
import {
  SbBlokData,
} from '@storyblok/react';

interface PageProps {
  blok: SbBlokData;
}

const Page = ({ blok }: PageProps) => (
 <main {...storyblokEditable(blok)}>
   {blok.body
     ? (blok.body as SbBlokData[]).map((blok) => (
         <StoryblokComponent blok={blok} key={blok._uid} />
       ))
     : null}
 </main>
);
export default Page;