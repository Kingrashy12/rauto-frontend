import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { IoMdClose } from "react-icons/io";
import { EditForm } from "../../components";

const EditModal = ({ open, setOpen, u }) => {
  return (
    <Backdrop open={open} className="z-50 relative">
      <div className="fixed w-full h-full flex items-center justify-center z-40">
        <div className="flex flex-col relative bg-white shadow shadow-black rounded-lg h-auto p-9 w-1/3 max-[800px]:w-11/12 max-[800px]:p-1 max-[700px]:p-0 z-40">
          <div className="flex justify-between">
            <p className="text-2xl text-black font-sofia">Edit Profile</p>
            <IoMdClose
              size={30}
              className="cursor-pointer p-1 bg-neutral-400 rounded-full"
              onClick={() => setOpen(false)}
            />
          </div>
          <EditForm u={u} setOpen={setOpen} />
        </div>
      </div>
    </Backdrop>
  );
};

export default EditModal;
