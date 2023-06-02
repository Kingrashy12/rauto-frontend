import React, { useState } from "react";
import { bodytype } from "../../data/productfilter";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const BodyFilter = ({ setBody }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <div className="flex justify-between w-full mt-5 items-center">
      <p className="text-black font-semibold">BodyType</p>
      <div className="p-1 border border-neutral-400 rounded-md w-28 cursor-pointer font-semibold absolute z-30 bg-white shadow shadow-black top-28 mt-2 right-2">
        <p
          onClick={() => setOpen(!open)}
          className="flex justify-between  font-sofia text-xs relative"
        >
          {clicked ? selected : "BodyType"}
          {open ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdKeyboardArrowDown size={25} />
          )}
        </p>
        {open && <hr />}
        {bodytype.map((filter, index) => (
          <p
            className="cursor-pointer font-semibold relative"
            key={index}
            value={filter.value}
            onClick={() => {
              setBody(filter.value);
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

export default BodyFilter;
