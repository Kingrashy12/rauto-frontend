import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserSavedCard } from "../../components";
import Profile from "./Profile";
import { getSavedItem } from "../../hooks/saveSlice";

const UserSaved = () => {
  const saved = useSelector((state) => state.saved.saved);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "My Saved - RAuto";
  });

  useEffect(() => {
    dispatch(getSavedItem());
  });

  return (
    <div className="w-full h-full mt-10 relative">
      <div className="flex justify-evenly p-3 max-[800px]:p-0 relative w-full max-[800px]:flex-col">
        <Profile />
        <div className="flex w-56 max-[800px]:hidden"></div>
        <div className="flex flex-col relative bg-white p-3 shadow shadow-black rounded-lg w-full">
          <h1 className="text-2xl font-sofia font-semibold">My Saved</h1>
          {saved.map((item) => (
            <UserSavedCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserSaved;
