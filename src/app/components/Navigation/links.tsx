import { Link } from "react-scroll";
import NextLink from "next/link";

const homeLinks = [
  {
    label: "Home",
    link: "hero",
  },
  {
    label: "Expertise",
    link: "expertise",
  },
  {
    label: "Projects",
    link: "projects",
  },
  {
    label: "About",
    link: "about-me",
  },
];

const pageLinks = [
  {
    label: "Home",
    link: "/",
  },
];

export const HomeLinks = () =>
  homeLinks.map((link) => (
    <li key={link.label}>
      <Link
        to={link.link}
        smooth
        className="cursor-pointer block py-2 px-3 text-white rounded-sm md:hover:bg-transparent hover:text-green-400 md:p-0"
        aria-current="page"
      >
        {link.label}
      </Link>
    </li>
  ));

export const PageLinks = () =>
  pageLinks.map((link) => (
    <li key={link.label}>
      <NextLink
        href={link.link}
        className="cursor-pointer block py-2 px-3 text-white rounded-sm md:hover:bg-transparent hover:text-green-400 md:p-0"
        aria-current="page"
      >
        {link.label}
      </NextLink>
    </li>
  ));
