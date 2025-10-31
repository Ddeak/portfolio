import { storyblokEditable } from "@storyblok/react";
import {
  SbBlokData,
} from '@storyblok/react';
import { FeaturedBlogs as FeaturedBlogsType } from "../../types/storyblok";

interface FeaturedBlogsProps {
  blok: FeaturedBlogsType;
}

const FeaturedBlogs = ({ blok }: FeaturedBlogsProps) => {
 return (
   <div
     {...storyblokEditable(blok as SbBlokData)}
     key={blok._uid}
     className="py-8 mb-6 container mx-auto text-left"
   >
     <div className="relative">
       <h2 className="relative font-serif text-4xl z-10 text-primary">
         {blok.title}1234
       </h2>
       <ul className="flex">
        
         {blok.blogs?.map((blog) => {
           return (
             <li key={'a'} className="pr-8 w-1/3">
               {/* <Link href={`blogs/${blog.slug}`}>
                 <a className="py-16 block">
                   <h2 className="pb-6 text-lg font-bold">
                     {blog.title}
                   </h2>
                 </a>
               </Link> */}
             </li>
           );
         })}
       </ul>
     </div>
   </div>
 );
};

export default FeaturedBlogs;