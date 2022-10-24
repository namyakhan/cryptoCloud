import React from "react";
import { Nfts } from "../data/contextProvider";


const CardItems = () => {
  return (
    <>

      <div className="flex flex-col items-center space-y-3 md:grid md:grid-cols-2 md:gap-2 lg:grid lg:grid-cols-3 lg:gap-4 xl:grid xl:grid-cols-4 xl:gap-10 justify-items-center pb-10">
        {" "}
        {Nfts.map((art) => (
          <div
            key={art.id}
            className="cards w-[200px] lg:w-[220px] lg:h-[350px] xl:w-[280px] xl:h-[405px]"
          >
            <img
              src={art.url}
              alt="nft"
              className="lg:w-[220px] xl:w-[283px]"
            />
            <div className="p-3">
              <h2 className="font-[600] text-[16px] xl:text-[20px]">
                {art.title}
              </h2>
              <div className="flex flex-row items-center space-x-2 mt-1">
                <img src={art.profile} alt="artist" />
                <h5 className="text-[12px]">{art.artist}</h5>
              </div>
              <div className="flex flex-row items-center justify-between space-x-2 mt-4">
                <div className="flex flex-row items-center space-x-1">
                  <img
                    src="images/nfts/eth.svg"
                    alt="eth-logo"
                    className="w-[16px] md:w-[16px]"
                  />
                  <h6 className="font-[600] text-[12px] md:text-[16px]">
                    {art.price}
                  </h6>
                </div>

                <button className="purple-gradient md:px-5 py-1 text-[12px] md:text-[16px]">
                  Place bid
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardItems;
