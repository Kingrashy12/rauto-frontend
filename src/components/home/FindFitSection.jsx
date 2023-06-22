import React from "react";
import { Button, HeaderOne } from "../../libs";
import { fitdata } from "../../data/fitdata";
import { StyledFitImage } from "../../styles/components/home/fit.styled";
import { Link } from "react-router-dom";

const FindFitSection = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center p-5 w-full relative">
      <HeaderOne
        fontSemibold
        fontSofia
        text="Featured Tools"
        className="text-4xl"
      />
      <div className="flex flex-wrap gap-4 w-full justify-center relative">
        {fitdata.map((item, index) => (
          <div
            className="flex flex-col bg-white shadow shadow-black p-[2rem] rounded-[6px] justify-center w-[600px] gap-4 relative items-center"
            key={index}
          >
            <StyledFitImage
              src={item.img}
              alt="Fit"
              className=""
              index={index}
            />
            <HeaderOne
              fontSemibold
              fontSofia
              text={item.title}
              className="text-3xl"
            />
            <p className="text-neutral-500 font-semibold font-sofia text-center text-[17px]">
              {item.subtext}
            </p>
            <Link to={item?.link}>
              <Button
                text={item.linkText}
                secondary
                className="w-[200px] rounded-[6px]"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindFitSection;
