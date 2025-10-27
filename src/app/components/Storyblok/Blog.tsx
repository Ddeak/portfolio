import {storyblokEditable} from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import {
  SbBlokData,
} from '@storyblok/react';
import { Blog as BlogType } from "../../types/storyblok";

interface BlogProps {
  blok: BlogType;
}

const Blog = ({ blok }: BlogProps) => {
   return (
     <div {...storyblokEditable(blok as SbBlokData)} key={blok._uid}>
       <div>
         {render(blok.subtitle)}
       </div>
       <div className="max-w-3xl pt-20 flex flex-col items-center">
         <div className="leading-relaxed text-xl text-left">
           {render(blok.content)}
         </div>
       </div>
     </div>
   );
 };

  export default Blog;