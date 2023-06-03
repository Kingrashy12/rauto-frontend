import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { pfilter } from "../../data/productfilter";
import { Skeleton } from "@mui/material";

const MakeFilter = ({ setMake, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex justify-between w-full mt-5 items-center relative">
      {isLoading ? (
        <Skeleton variant="text" width={`60px`} height={`30px`} />
      ) : (
        <p className="text-black font-semibold">Make</p>
      )}
      {isLoading ? (
        <Skeleton variant="text" width={`100px`} height={`50px`} />
      ) : (
        <div className="p-1 border border-neutral-400 rounded-md w-32 cursor-pointer font-semibold absolute z-40 bg-white shadow shadow-black top-0 right-0">
          <p
            onClick={() => setOpen(!open)}
            className="flex justify-between  font-sofia text-xs relative"
          >
            {clicked ? selected : "Make"}
            {open ? (
              <MdKeyboardArrowUp size={25} />
            ) : (
              <MdKeyboardArrowDown size={25} />
            )}
          </p>
          {open && <hr />}
          {pfilter.map((filter, index) => (
            <p
              className="cursor-pointer font-semibold relative"
              key={index}
              value={filter.value}
              onClick={() => {
                setMake(filter.value);
                setSelected(filter.text);
                setClicked(true);
                setOpen(false);
              }}
            >
              {open && <p>{filter.text}</p>}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MakeFilter;
