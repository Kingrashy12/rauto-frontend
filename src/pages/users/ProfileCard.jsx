import React from "react";
import Profile from "./Profile";
import { UserListing } from "../../components";

const ProfileCard = () => {
  return (
    <div className="flex justify-evenly p-3 max-[800px]:p-0 relative w-full max-[800px]:flex-col">
      <Profile />
      <div className="flex w-56 max-[800px]:hidden"></div>
      <UserListing />
    </div>
  );
};

export default ProfileCard;
