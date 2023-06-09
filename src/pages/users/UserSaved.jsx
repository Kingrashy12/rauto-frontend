import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSavedCard } from "../../components";
import Profile from "./Profile";
import { getSavedItem } from "../../hooks/saveSlice";

const UserSaved = () => {
  const saved = useSelector((state) => state.saved.savedItems);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "My Saved - RAuto";
  });

  return (
    <div className="w-full h-full mt-10 relative">
      <div className="flex justify-evenly p-3 max-[800px]:p-0 relative w-full max-[800px]:flex-col max-[800px]:gap-5">
        <Profile />
        <div className="flex w-56 max-[800px]:hidden"></div>
        <div className="flex flex-col relative bg-white p-3 shadow shadow-black rounded-lg w-full">
          <div className="flex justify-between mb-2">
            <h1 className="text-2xl font-sofia font-semibold">My Saved</h1>
            <button className="p-2 font-sofia font-semibold bg-black opacity-70 rounded-md text-sm text-white">
              {saved.length} Saved Listing
            </button>
          </div>
          <hr />
          {saved.length === 0 && (
            <p className="font-sofia font-semibold text-lg text-center mt-2">
              You have no saved Listing
            </p>
          )}
          {saved.map((item) => (
            <UserSavedCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSaved;
