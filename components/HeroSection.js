import React, { useState } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Links, Brands } from "../data/contextProvider";

const HeroSection = () => {
  let [open, setOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);

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

  const Window = () => (
    <ul
      className={`mesh absolute  bg-white md:hidden pb-12 z-[-1] left-0 w-full   pl-9 `}
    >
      {Links.map((link) => (
        <li key={link.name}>
          <Link href={link.link} to={link.link}>
            <a>{link.name}</a>
          </Link>
        </li>
      ))}

      <button onClick={login} className="purple-gradient">
        Launch App
      </button>
    </ul>
  );

  return (
    <div id="home" className="mesh h-full">
      {/* Navbar */}
      <nav className="container mx-auto w-full left-0  sticky top-0 ">
        <div className="md:flex items-center justify-between px-10 lg:px-28 py-4 lg:py-8">
          <h6 className="cursor-pointer">
            CRYPTO <span className="font-gradient">CLOUD </span>
          </h6>

          <div
            onClick={() => {
              setOpen(!open);
              setShowResults(true);
            }}
            className=" absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {!open ? (
              <Bars3Icon className="h-7" />
            ) : (
              <XMarkIcon className="h-7" />
            )}
            {showResults ? <Window /> : null}
          </div>

          <ul className="hidden md:flex md:flex-row md:items-center md:space-x-5 lg:space-x-8 md:pb-0 pb-12 ">
            {Links.map((link) => (
              <li key={link.name}>
                <Link href={link.link} to={link.link}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
            <button onClick={login} className="purple-gradient">
              Launch App
            </button>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className=" bg-stars bg-repeat container mx-auto lg:py-10 px-10 lg:px-28 flex flex-col-reverse lg:flex-row items-center">
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
          className="w-[200px] lg:w-[250px] xl:w-[380px]"
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
