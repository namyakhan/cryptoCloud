import React from "react";

const Coins = ({
  name,
  price,
  symbol,
  marketcap,

  image,
  priceChange,
}) => {
  return (
    <div className="w-2/3 container mx-auto bg-blackbg rounded-xl border border-gray  p-2 md:p-3 mb-5">
      {/* left */}
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center space-x-2 md:space-x-5 ">
          <img
            src={image}
            alt="crypto"
            className="w-[25px] h-[25px] md:h-[50px] md:w-[50px]"
          />
          <div>
            <div className=" flex flex-row items-center space-x-1 md:space-x-3 ">
              <h2>{name}</h2>
              <h6 className="text-[12px] md:text-[16px] uppercase text-gray-500 font-bold">
                {" "}
                ({symbol})
              </h6>
            </div>
            <h5 className="text-[12px] md:text-[16px]">
              ${marketcap.toLocaleString()}
            </h5>
          </div>
        </div>
        {/* right */}
        <div>
          <h2>${price}</h2>

          {priceChange < 0 ? (
            <h5 className="coin-percent red">{priceChange.toFixed(2)}%</h5>
          ) : (
            <h5 className="coin-percent green">{priceChange.toFixed(2)}%</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default Coins;
