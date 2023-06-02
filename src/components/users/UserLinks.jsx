import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillBellFill, BsFillBookmarksFill } from "react-icons/bs";
import { toast } from "react-toastify";

const UserLinks = ({ user }) => {
  const [setLoading] = useState(false);
  function handleDelete() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Account deleted", { position: "top-center" });
    }, 5000);
  }

  return (
    <div className="relative w-full">
      <hr className="z-0" />
      <p className="text-lg font-semibold font-sofia flex gap-2 items-center hover:bg-slate-400 hover:text-white p-3 rounded-sm cursor-pointer">
        <BsFillBookmarksFill size={25} /> Saved
      </p>
      <hr className="z-0" />
      <p className="text-lg font-semibold font-sofia flex items-center gap-2 hover:bg-slate-400 hover:text-white p-3 rounded-sm cursor-pointer">
        My Listing
      </p>
      <hr />
      <p className="text-lg font-semibold font-sofia flex items-center gap-2 hover:bg-slate-400 hover:text-white p-3 rounded-sm cursor-pointer">
        <BiMessageDetail size={25} /> Messages
      </p>
      <hr className="z-0" />
      <p className="text-lg font-semibold font-sofia flex items-center gap-2 hover:bg-slate-400 hover:text-white p-3 rounded-sm cursor-pointer">
        <BsFillBellFill size={25} /> Notifications
      </p>
      <hr />
      <button
        className="bg-transparent border-2 mt-2 mb-2 text-red-600 p-2 rounded-md outline-none border-red-600 font-semibold hover:bg-red-600 hover:text-white"
        onClick={handleDelete}
      >
        Delete My Account
      </button>
    </div>
  );
};

export default UserLinks;
