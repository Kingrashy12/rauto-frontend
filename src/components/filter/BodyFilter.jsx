import React, { useState } from "react";
import { bodytype } from "../../data/productfilter";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Checkbox, Skeleton } from "@mui/material";

const BodyFilter = ({ setBody, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
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
          {selected ? selected : "BodyType"}
          {open ? (
            <MdKeyboardArrowUp size={30} />
          ) : (
            <MdKeyboardArrowDown size={30} />
          )}
        </p>
      )}
      {bodytype.map((filter, index) => (
        <button
          className="flex gap-2 items-center font-sofia cursor-pointer font-semibold relative"
          key={index}
          value={filter.value}
          onClick={() => {
            setBody(filter.value);
            setSelected(filter.text);
            setClicked(true);
            setSelected(filter.text);
            setOpen(false);
          }}
        >
          {open && (
            <>
              <Checkbox key={index} />
              {open && <p>{filter.text}</p>}
            </>
          )}
        </button>
      ))}
      {open && <hr />}
    </div>
  );
};

export default BodyFilter;
