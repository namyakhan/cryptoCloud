import React, { useState } from "react";

import { useRouter } from "next/router";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Brands } from "../data/contextProvider";

const HeroSection = () => {
  let [open, setOpen] = useState(false);

  const router = useRouter();
  const login = (e) => {
    e.preventDefault();
    router.push("/search");
  };

  const arts = (e) => {
    e.preventDefault();
    router.push("/marketplace");
  };
  let Links = [
    { name: "", link: "" },
    { name: "Home", link: "/" },
    { name: "Cryptocurrency", link: "/search" },
    { name: "Marketplace", link: "/marketplace" },
  ];

  return (
    <div id="home" className="mesh h-full">
      {/* Navbar */}
      <nav className="container mx-auto w-full left-0  fixed top-0 lg:px-28">
        <div className="md:flex items-center justify-start space-x-10 px-10 lg:px-28 py-4 lg:py-8">
          <h6 className="cursor-pointer">
            CRYPTO <span className="font-gradient">CLOUD </span>
          </h6>

          <div
            onClick={() => {
              setOpen(!open);
            }}
            className=" absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {!open ? (
              <Bars3Icon className="h-7" />
            ) : (
              <XMarkIcon className="h-7" />
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blackbg md:z-auto z-[100] left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${
              open ? "top-18 " : "top-[-490px]"
            }`}
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className=" bg-stars bg-repeat container mx-auto lg:py-28 px-10 lg:px-28 flex flex-col-reverse lg:flex-row items-center">
        {/* left section */}
        <div className="flex flex-col text-center lg:text-start pt-3">
          <div className="leading-tight ">
            <h1>Discover, Collect</h1>
            <h1>& Mint Rare NFTs</h1>
          </div>
          <p>
            Empowers traders, liquidity providers & developers to participate in
            an open financial marketplace with no barriers to entry.
          </p>
          <div className="flex flex-row items-center justify-center lg:justify-start space-x-3 lg:space-x-5">
            <button onClick={arts} className="purple-gradient">
              Explore
            </button>
            <button onClick={login} className="box">
              How it works?
            </button>
          </div>
        </div>

        {/* right section */}
        <img
          src="images/hero.svg"
          alt="hero"
          className="w-[200px] lg:w-[250px] xl:w-[380px] pt-20 lg:pt-0"
        />
      </div>
      {/* Brands */}
      <div className="hidden xl:flex :flex-row items-center justify-between container mx-auto  lg:px-28">
        {Brands.map((logo) => (
          <img key={logo.id} src={logo.url} alt="logo" className={logo.class} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
