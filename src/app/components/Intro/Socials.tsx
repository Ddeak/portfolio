import Image from "next/image";

import LinkedIn from "@/assets/linkedIn.svg";
import GitHub from "@/assets/github.svg";

const Icons = [
  {
    image: LinkedIn,
    altText: "LinkedIn Logo",
    link: "https://linkedin.com/in/daniel-deak-06596572",
  },
  {
    image: GitHub,
    altText: "Github Logo",
    link: "https://github.com/ddeak",
  },
];

const Socials = () => {
  return (
    <div className="flex flex-row col-gap-[10]">
      {Icons.map((icon) => (
        <a href={icon.link} target="_blank">
          <Image
            className="w-[30px] h-[30px]"
            src={icon.image}
            alt={icon.altText}
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
