import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  UserCircleIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white py-5 shadow-md px-5 md:px-10">
      {/* left content-logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectPosition="left"
          objectFit="contain"
        />
      </div>
      {/* middle content -search box */}
      <div className="flex items-center sm:border-2  rounded-full py-2 sm:shadow-sm">
        <input
          className="pl-5 flex-grow outline-none bg-transparent text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 text-white bg-red-400 rounded-full p-2 cursor-pointer sm:mx-2 " />
      </div>
      {/* Right content */}
      <div className="flex items-center justify-end text-gray-500 space-x-4 cursor-pointer">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
