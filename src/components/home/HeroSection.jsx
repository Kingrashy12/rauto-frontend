import React from "react";
import { HeroImage, HeroImageII, RAuto } from "../../asset";
import { Button } from "../../libs";
import { Link, useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 p-x max-[700px]:pt-5 max-[700px]:p-5">
        <h1 className="font-extrabold text-[60px] font-sofia z-0 max-[700px]:text-[35px]">
          Find, Buy a car -- quickly and easily
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5 font-sofia z-0 max-[700px]:text-[20px]">
          Streamline your car buying experience with our effortless listing
          process
        </p>
        <Button
          secondary
          text="Explore Cars"
          className="rounded-3xl"
          onClick={() => navigate("/all-listing")}
          to="/all-listing"
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0 max-[700px]:-z-10">
          <img src={HeroImage} alt="" />
          <div className="absolute max-[700px]:-top-60 xl:-top-24 bg-bg-hero bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
