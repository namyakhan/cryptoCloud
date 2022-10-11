import React from "react";
import CardItems from "../components/CardItems";

const marketplace = () => {
  return (
    <div className="bg-blackbg pb-24 px-10 lg:px-28 py-4 lg:py-8">
      <div className="container mx-auto ">
        <div className="flex flex-col items-center">
          <h1 className="pt-10  font-semibold text-[25px] md:text-[30px] lg:text-[45px] mb-10">
            Hot Drops 🔥
          </h1>
        </div>

        {/* cards */}
        <div>
          <CardItems />
        </div>
      </div>
    </div>
  );
};

export default marketplace;
