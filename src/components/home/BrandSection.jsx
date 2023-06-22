import React from "react";
import { HeaderOne } from "../../libs";
import { branddata } from "../../data/brand";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShortListingFeed from "./ShortListingFeed";

const BrandSection = () => {
  const list = useSelector((state) => state.listing.listings);
  return (
    <div className="bg-black p-6 flex flex-col gap-5 w-full max-[700px]:p-2">
      <HeaderOne
        text="You might like"
        className="text-white text-3xl"
        fontSofia
        fontSemibold
      />
      <div className="flex flex-wrap relative w-full gap-3">
        {list
          .map((item, index) => <ShortListingFeed item={item} key={index} />)
          .slice("0", "10")}
      </div>
    </div>
  );
};

export default BrandSection;
