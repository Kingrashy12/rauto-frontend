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
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`max-[1024px]:w-10/12 fixed bg-white max-[800px]:w-11/12 border border-neutral-300 rounded-md p-2 z-z-70 w-96 overflow-y-auto ${
        colors ? "h-10/12" : "h-1/2"
      } relative ${open && "h-full"}`}
    >
      <div className="flex flex-col mt-2 relative">
        <BrandFilter setCond={setCond} isLoading={isLoading} />
        <MakeFilter
          setMake={setMake}
          isLoading={isLoading}
          setOpen={setOpen}
          open={open}
        />
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
