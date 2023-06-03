import React, { useState } from "react";
import { Skeleton } from "@mui/material";

const BrandFilter = ({ setCond, isLoading }) => {
  const [brand, setBrand] = useState(false);
  const [used, setUsed] = useState(false);
  return (
    <div className="flex bg-slate-200 p-1 rounded-md justify-evenly items-center text-center">
      {isLoading ? (
        <Skeleton variant="text" width={`100%`} height={`30px`} />
      ) : (
        <>
          <p
            className={`${
              used ? "text-white bg-black" : "text-black bg-transparent"
            }  bg-black p-1 rounded-md font-semibold font-sofia w-full cursor-pointer`}
            onClick={() => {
              setUsed(!used);
              setBrand(false);
              setCond("used");
            }}
          >
            Used Cars
          </p>
          <p
            className={`${brand ? "text-white" : "text-black"} ${
              brand ? "bg-black" : "bg-transparent"
            } p-1 rounded-md font-semibold font-sofia w-full cursor-pointer`}
            onClick={() => {
              setBrand(!brand);
              setUsed(false);
              setCond("brand new");
            }}
          >
            New Cars
          </p>
        </>
      )}
    </div>
  );
};

export default BrandFilter;
