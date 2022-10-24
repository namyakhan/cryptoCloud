import React from "react";
import CardItems from "../components/CardItems";
import Navbar from "../components/Navbar";

const marketplace = () => {
  return (
    <>
      <Navbar />
      <div className="bg-blackbg pb-24 px-10 lg:px-28 py-4 lg:py-8">
        <div className="container mx-auto ">
          <div className="flex flex-col items-center">
            <h1 className="mt-12 font-semibold text-[25px] md:text-[30px] lg:text-[45px] mb-10">
              Hot Drops 🔥
            </h1>
          </div>

          {/* cards */}
          <div>
            <CardItems />
          </div>
        </div>
      </div>
    </>
  );
};

export default marketplace;
