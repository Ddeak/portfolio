"use client";

import { toURL } from "@/utils/toUrl";

type CardProps = {
  children: React.ReactNode;
  noPadding?: boolean;
  fullWidth?: boolean;
  fullBorder?: boolean;
  link?: string;
};

const Card = ({ children, fullWidth, fullBorder, link, noPadding }: CardProps) => {
  const widthStyles = fullWidth ? "w-full max-w-7xl" : "";
  const borderStyles = fullBorder ? "border-1" : "border-y-1";
  const clickStyles = link ? "cursor-pointer focus:border-gray-900" : "";
  const paddingStyles = noPadding ? "" : "p-6"
  const onClick = link ? () => window.location.href = toURL(link) : undefined;

  return (
    <div
      onClick={onClick}
      className={`card flex flex-col gap-y-3 items-center ${paddingStyles} ${borderStyles} border-solid border-green-400 rounded-lg ${widthStyles} ${clickStyles}}`}
    >
      {children}
    </div>
  );
};

export default Card;
