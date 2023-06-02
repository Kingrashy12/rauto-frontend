import React from "react";
import { GrFormClose } from "react-icons/gr";
import Backdrop from "@mui/material/Backdrop";

const PopUp = ({ setPop, pop }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={pop}
      // onClick={handleClose}
    >
      <div className="fixed top-24 right-16 self-center h-50% w-full drop-shadow-2xl flex items-center justify-center">
        <div className="relative w-1/3 p-5 bg-slate-900 rounded-lg">
          <div className="flex justify-between">
            <h2 className="text-3xl font-sofia text-white">Create Ad</h2>
            <span
              className="p-2 cursor-pointer text-white bg-neutral-300 rounded-full"
              onClick={() => setPop(false)}
            >
              <GrFormClose size={25} />
            </span>
          </div>
          <hr className="text-neutral-200 mt-2" />
          {/* <CreateAd setPop={setPop} /> */}
        </div>
      </div>
    </Backdrop>
  );
};

export default PopUp;
