import React from "react";
import { HeaderOne } from "../../libs";
import { favouritebranddata } from "../../data/favourdata";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopSection = () => {
  const tem = useSelector((state) => state.listing.listings);
  const make = tem.find((item) => item.pmake);
  return (
    <div className="flex flex-col relative w-full justify-center gap-5 items-center p-6">
      <HeaderOne
        fontSemibold
        fontSofia
        text="Shop your favorite brand"
        className="text-4xl"
      />
      <div className="flex flex-wrap w-full justify-center items-center gap-3">
        {favouritebranddata.map((item, index) => (
          <Link to={item.link}>
            <div className="flex gap-3 rounded-[8px] bg-white shadow shadow-slate-400 p-3 w-[300px] justify-center items-center">
              <img src={item.img} alt="Brand Image" className="w-[40px]" />
              <p className="font-semibold font-sofia text-base">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopSection;
