import React from "react";
import CustomFilter from "../filter/CustomFilter";
import SearchBar from "../form/SearchBar";

const HeroHeader = () => {
  return (
    <div className="mt-6 px-10 py-10 max-[700px]:py-0 max-[700px]:px-5">
      <div className="">
        <h1 className="font-semibold text-[30px] font-sofia">Car Cataloge</h1>
        <p className="font-sofia font-semibold">Explore your dream cars</p>
      </div>
      <div className="flex relative flex-col px-3 py-3 w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroHeader;
