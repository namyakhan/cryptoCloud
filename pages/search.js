import React, { useEffect, useState } from "react";
import Coins from "../components/Coins";
import axios from "axios";

const Search = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="flex flex-col items-center bg-blackbg ">
      <h1 className="mt-20 font-semibold text-[25px] md:text-[30px] lg:text-[45px]">
        Popular Cryptocurrencies
      </h1>

      <form>
        <input
          className=" mt-3 mb-10 md:mt-5 md:mb-16 bg-blackbg  p-3 md:p-4 w-[300px] md:w-[450px] rounded-full placeholder-gray  border  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-purple text-[15px]"
          type="text"
          onChange={handleChange}
          placeholder="Search a currency"
        />
      </form>
      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
};

export default Search;
