import Image from "next/image";

import LinkedIn from "@/assets/linkedIn.svg";
import GitHub from "@/assets/github.svg";

const Icons = [
  {
    image: LinkedIn,
    name: "LinkedIn",
    link: "https://linkedin.com/in/daniel-deak-06596572",
  },
  {
    image: GitHub,
    name: "Github",
    link: "https://github.com/ddeak",
  },
];

const Socials = () => (
  <div className="flex flex-row gap-x-3">
    {Icons.map((icon) => (
      <a key={icon.name} href={icon.link} target="_blank">
        <Image
          className="w-[30px] h-[30px]"
          src={icon.image}
          alt={`${icon.name} Icon`}
        />
      </a>
    ))}
  </div>
);

export default Socials;
