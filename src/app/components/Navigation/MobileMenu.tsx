import { Link } from "react-scroll";
import { navLinks } from "./links";

const MobileMenu = () => (
  <ul className="flex flex-col p-4 pt-0 md:hidden w-full">
    {navLinks.map((link) => (
      <li key={link.label}>
        <Link
          to={link.link}
          smooth
          className="cursor-pointer block py-2 px-3 text-white rounded-sm md:hover:bg-transparent md:p-0 hover:bg-green-400"
          aria-current="page"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
);

export default MobileMenu;
