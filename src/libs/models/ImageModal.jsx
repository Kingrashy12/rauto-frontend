import React from "react";
import { IoMdClose } from "react-icons/io";

const ImageModal = ({ photo, setGallery, setProfile }) => {
  return (
    <div className="flex flex-col relative bg-white shadow shadow-black rounded-lg h-auto p-9 w-1/3 z-z-70">
      <div className="flex justify-between">
        <p className="text-2xl text-black font-sofia">Edit Media</p>
        <IoMdClose
          size={30}
          className="cursor-pointer p-1 bg-neutral-400 rounded-full"
          onClick={() => setGallery(false)}
        />
      </div>
      <div className="flex flex-col relative gap-3">
        <img src={photo} alt="Profile" className="w-full h-full" />
        <button
          className="bg-black text-white p-2 rounded-lg border-2 border-black hover:text-black hover:bg-transparent cursor-pointer"
          onClick={() => {
            setProfile(photo);
            setGallery(false);
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
