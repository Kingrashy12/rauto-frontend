import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { pfilter } from "../../data/productfilter";
import { Checkbox, Skeleton } from "@mui/material";

const MakeFilter = ({ setMake, isLoading, setOpen, open }) => {
  const [selected, setSelected] = useState("");
  const [checked, setChecked] = useState("");
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {isLoading ? (
        <Skeleton variant="text" width={`100%`} height={`50px`} />
      ) : (
        <p
          className={`font-semibold font-sofia p-2 border-b border-b-neutral-300 flex justify-between cursor-pointer ${
            open && "shadow-2xl"
          }`}
          onClick={() => setOpen(!open)}
        >
          {selected ? selected : "Make"}
          {open ? (
            <MdKeyboardArrowUp size={30} />
          ) : (
            <MdKeyboardArrowDown size={30} />
          )}
        </p>
      )}
      {pfilter.map((filter, index) => (
        <button
          key={index}
          className="flex gap-2 items-center cursor-pointer font-sofia font-semibold relative"
          onClick={() => {
            setMake(filter.value);
            setSelected(filter.text);
            setClicked(true);
            setSelected(filter.text);
            setOpen(false);
          }}
        >
          {open && (
            <>
              <Checkbox
                key={index}
                onClick={(e) => {
                  setChecked(e.target.value);
                }}
              />
              {open && <p>{filter.text}</p>}
            </>
          )}
        </button>
      ))}
      {open && <hr />}
    </div>
  );
};

export default MakeFilter;
