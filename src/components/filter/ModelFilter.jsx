import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { benzfilter } from "../../data/Benzfilter";

const ModelFilter = () => {
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("");
  return (
    <div className="flex justify-between w-full mt-5 items-center relative">
      <p className="text-black font-semibold">Model</p>
      <div className="p-1 border border-neutral-400 rounded-md w-1/2 cursor-pointer font-semibold absolute z-10 bg-white shadow shadow-black top-0 right-0">
        <p
          onClick={() => setOpen(!open)}
          className="flex justify-between  font-sofia text-xs relative"
        >
          {clicked ? selected : "Model"}
          {open ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdKeyboardArrowDown size={25} />
          )}
        </p>
        {open && <hr />}
        {benzfilter.map((filter, index) => (
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
    </div>
  );
};

export default ModelFilter;
