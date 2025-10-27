import { Link } from "react-scroll";
import { navLinks } from "./links";

const LinksList = () => (
  <ul className="flex flex-col p-4 md:p-0 font-medium md:space-x-8 rtl:space-x-reverse flex-row bg-transparent border-gray-700">
    {navLinks.map((link) => (
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
    ))}
  </ul>
);

export default LinksList;
