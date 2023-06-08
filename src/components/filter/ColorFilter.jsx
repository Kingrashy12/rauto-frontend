import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Checkbox, Skeleton } from "@mui/material";

const ColorFilter = ({ setColor, colors, setColors, isLoading }) => {
  //   const [colors, setColors] = useState(false);
  const [checked, setChecked] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <div>
      {isLoading ? (
        <Skeleton variant="text" width={`100%`} height={`50px`} />
      ) : (
        <p
          className={`font-semibold font-sofia p-2 border-b border-b-neutral-300 flex justify-between cursor-pointer ${
            colors && "shadow-2xl"
          }`}
          onClick={() => setColors(!colors)}
        >
          {selected ? selected : "Color"}
          {colors ? (
            <MdKeyboardArrowUp size={30} />
          ) : (
            <MdKeyboardArrowDown size={30} />
          )}
        </p>
      )}
      {colors && (
        <div className="flex flex-col font-sofia relative text-justify">
          <button
            className="flex gap-2 items-center"
            onClick={() => setColor("black")}
          >
            <Checkbox />
            <div className="bg-black p rounded-full w-3 h-3"></div>
            <p
              className="font-semibold"
              onClick={() => {
                setColor("black");
                setSelected("Black");
                setColors(false);
              }}
            >
              Black
            </p>
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() => {
              setColor("blue");
              setSelected("Blue");
              setColors(false);
            }}
          >
            <Checkbox />
            <div className="bg-blue-600 p rounded-full w-3 h-3"></div>
            <p className="font-semibold">Blue</p>
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() => {
              setColor("gray");
              setSelected("Gray");
              setColors(false);
            }}
          >
            <Checkbox />
            <div className="bg-neutral-500 p rounded-full w-3 h-3"></div>
            <p className="font-semibold">Gray</p>
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() => {
              setColor("green");
              setSelected("Green");
              setColors(false);
            }}
          >
            <Checkbox />
            <div className="bg-green-600 p rounded-full w-3 h-3"></div>
            <p className="font-semibold">Green</p>
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() => {
              setColor("red");
              setSelected("Red");
              setColors(false);
            }}
          >
            <Checkbox />
            <div className="bg-red-600 p rounded-full w-3 h-3"></div>
            <p className="font-semibold">Red</p>
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() => {
              setColor("white");
              setSelected("White");
              setColors(false);
            }}
          >
            <Checkbox />
            <div className="bg-white shadow shadow-black p rounded-full w-3 h-3"></div>
            <p className="font-semibold">White</p>
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() => {
              setColor("purple");
              setSelected("Purple");
              setColors(false);
            }}
          >
            <Checkbox />
            <div className="shadow bg-purple-600 shadow-black p rounded-full w-3 h-3"></div>
            <p className="font-semibold">Purple</p>
          </button>
          <button
            className="flex gap-2 items-center"
            onClick={() => {
              setColor("unknown");
              setSelected("UnKnown");
              setColors(false);
            }}
          >
            <Checkbox />
            <div className="shadow bg-slate-200 shadow-black p rounded-full w-3 h-3"></div>
            <p className="font-semibold">Unknown</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default ColorFilter;
