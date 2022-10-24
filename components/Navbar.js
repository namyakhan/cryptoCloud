import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  let Links = [
    { name: "", link: "" },
    { name: "Home", link: "/" },
    { name: "Cryptocurrency", link: "/search" },
    { name: "Marketplace", link: "/marketplace" },
  ];

  return (
    <nav className=" w-full left-0  sticky top-0 bg-blackbg">
      <div className="md:flex items-center justify-between px-10 lg:px-28 py-4 lg:py-8">
        <h6 className="hidden md:flex cursor-pointer">
          CRYPTO <span className="font-gradient">CLOUD </span>
        </h6>

        <ul className="flex flex-row items-center justify-end space-x-2 md:space-x-5 lg:space-x-8 md:pb-0 pb-12 ">
          {Links.map((link) => (
            <li key={link.name}>
              <Link href={link.link} to={link.link}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
