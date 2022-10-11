import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

import { useRouter } from "next/router";

const Navbar = () => {
  let Links = [
    { name: "", link: "" },
    { name: "Cryptocurrency", link: "cryptocurrency" },
    { name: "Exchanges", link: "exchanges" },
    { name: "Prices", link: "prices" },
  ];

  let [open, setOpen] = useState(false);
  const router = useRouter();
  const login = (e) => {
    e.preventDefault();

    router.push("/search");
  };

  return (
    <nav className="container mx-auto drop-shadow-md hover:drop-shadow-lg w-full left-0  sticky top-0 bg-transparent">
      <div className="md:flex items-center justify-between px-5 py-4 lg:px-16 lg:py-5">
        <h6 className="cursor-pointer">
          CRYPTO <span className="text-[#9900F0]">CLOUD </span>
        </h6>

        <div
          onClick={() => setOpen(!open)}
          className=" absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {!open ? (
            <Bars3Icon className="h-7" />
          ) : (
            <XMarkIcon className="h-7" />
          )}
        </div>

        <ul
          className={`md:flex  md:items-center space-x-5 lg:space-x-8 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  transition duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-[14px] lg:text-[16px] md:my-0 my-7 hover:text-violet-700 font-medium"
            >
              <Link href={link.link}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}

          <button onClick={login} className="px-8 py-[7px]">
            Launch App
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
