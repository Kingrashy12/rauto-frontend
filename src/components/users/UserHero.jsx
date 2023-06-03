import React from "react";
import { Male } from "../../asset";

const UserHero = ({ user }) => {
  return (
    <div className="relative w-full">
      {user?.userProfile ? (
        <img
          src={user.userProfile}
          alt="UserProfile"
          style={{ objectFit: "cover" }}
          className="w-full h-72 bg-slate-300 rounded-lg max-[700px]:h-44 border border-black"
        />
      ) : (
        <img
          src={Male}
          alt="UserProfile"
          className="w-full h-64 bg-slate-300 rounded-lg max-[700px]:h-44 border border-black"
        />
      )}
    </div>
  );
};

export default UserHero;
