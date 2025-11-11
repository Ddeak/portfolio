import Image from "next/image";

import LinkedIn from "@/assets/icons/linkedIn.svg";
import GitHub from "@/assets/icons/github.svg";

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
  <div className="flex flex-row">
    {Icons.map((icon) => (
      <a key={icon.name} href={icon.link} target="_blank" className="hover:bg-gray-600/30 rounded-lg p-2">
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
