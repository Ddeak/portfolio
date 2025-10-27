"use client";

import Image from "next/image";
import BurgerIcon from "@/assets/icons/burger.svg";

import ToggleAnimation from "./ToggleAnimation";
import LinksList from "./LinksList";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const TopNav = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav className="bg-gray-900/30 fixed w-full z-20 top-0 start-0 border-b border-gray-600 backdrop-blur-xs">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          Daniel Deak
        </span>
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <ToggleAnimation />

          <button
            data-collapse-toggle="topNav"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="topNav"
            aria-expanded="false"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <Image src={BurgerIcon} alt="Open menu" />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="topNav"
        >
          <LinksList />
        </div>
      </div>
      {mobileMenu && <MobileMenu />}
    </nav>
  );
};

export default TopNav;
