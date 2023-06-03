import React, { useState } from "react";
import BrandFilter from "../filter/BrandFilter";
import MakeFilter from "../filter/MakeFilter";
import BodyFilter from "../filter/BodyFilter";
import YearFilter from "../filter/YearFilter";
import ColorFilter from "../filter/ColorFilter";

const RightSide = ({
  setMake,
  setColor,
  setCond,
  setBody,
  setYear,
  isLoading,
}) => {
  const [colors, setColors] = useState(false);

  return (
    <div
      className={`max-[800px]:hidden bg-white border border-neutral-300 rounded-md p-2 w-96 ${
        colors ? "h-10/12" : "h-96"
      } relative`}
    >
      <div className="flex flex-col mt-2">
        <BrandFilter setCond={setCond} isLoading={isLoading} />
        <MakeFilter setMake={setMake} isLoading={isLoading} />
        <BodyFilter setBody={setBody} isLoading={isLoading} />
        <YearFilter setYear={setYear} isLoading={isLoading} />
        {/* ENDS */}
        <hr className="mt-5 text-neutral-300 w-full p-0 mb-3" />
        <ColorFilter
          setColor={setColor}
          colors={colors}
          setColors={setColors}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default RightSide;
