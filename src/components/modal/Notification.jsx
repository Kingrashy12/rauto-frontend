import React from "react";
import { IoClose } from "react-icons/io5";

const Notification = ({ notify, setOpen }) => {
  return (
    <div className="w-full h-full fixed justify-center items-center flex">
      <div className="relative w-1/3 max-[800px]:w-10/12 h-1/2 bg-black p-3 rounded-lg">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-2xl max-[800px]:text-xl text-white font-sofia font-semibold">
              Notifications
            </h1>
            <IoClose
              size={30}
              onClick={() => setOpen(false)}
              className="bg-neutral-400 rounded-full p-1 cursor-pointer text-white"
            />
          </div>
          <div className="flex gap-2 p-2 mt-5 items-center">
            <img
              src={notify.Img}
              alt="Notification"
              className="w-14 h-14 rounded-full"
            />
            <p className="font-sofia font-semibold text-lg text-white">
              {notify.body}
            </p>
            <p className="font-sofia font-semibold text-lg text-white">
              {notify.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
