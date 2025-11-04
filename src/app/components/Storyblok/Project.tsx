import { render } from "storyblok-rich-text-react-renderer";
import { Project as ProjectType } from "../../types/storyblok";
import { StoryblokRichText } from "@storyblok/react";
import Back from "../Navigation/Back";
import Image from "next/image";

interface BlogProps {
  blok: ProjectType;
}

const Project = ({ blok }: BlogProps) => (
  <div key={blok._uid} className="pt-24 px-8 flex flex-col pb-12 max-w-5xl">
    <Back />
    <div className="text-xl text-green-400">{render(blok.subtitle)}</div>

    {blok.image.filename && (
      <Image
        className="rounded-lg mt-4"
        src={blok.image.filename}
        alt=""
        width="200"
        height="300"
      />
    )}

    <div className="prose">
      <StoryblokRichText doc={blok.content} />
    </div>
  </div>
);

export default Project;
