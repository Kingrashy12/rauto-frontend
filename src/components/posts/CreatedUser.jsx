import { Divider, Skeleton } from "@mui/material";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const CreatedUser = ({
  userProfile,
  user,
  followers,
  userAd,
  username,
  isLoading,
}) => {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-200 p-2 rounded-md flex flex-col mt-5 gap-5">
      <div className="flex items-center gap-4">
        {isLoading ? (
          <Skeleton variant="circular" className="w-16" height={`64px`} />
        ) : (
          <img
            src={userProfile}
            alt="ad-creator"
            className="w-16 rounded-full h-16 hover:opacity-70 hover:cursor-pointer"
          />
        )}
        <div className="flex flex-col">
          {isLoading ? (
            <Skeleton variant="text" width={`120px`} height={`25px`} />
          ) : (
            <p
              className="text-base font-semibold font-poppin hover:underline hover:cursor-pointer"
              onClick={() => navigate(`/user/${username}`)}
            >
              {user}
            </p>
          )}
          {isLoading ? (
            <Skeleton variant="text" width={`90px`} height={`20px`} />
          ) : (
            <span className="font-sofia text-xs font-semibold">
              Advert: {userAd}
            </span>
          )}
          {isLoading ? (
            <Skeleton variant="text" width={`80px`} height={`18px`} />
          ) : (
            <span className="text-neutral-500 font-semibold font-sofia text-sm">
              Followers: {followers}
            </span>
          )}
        </div>
      </div>
      <Divider className="text-neutral-500" />
      {isLoading ? (
        <Skeleton variant="text" width={`100%`} height={`50px`} />
      ) : (
        <button className="bg-transparent items-center flex gap-2 justify-center border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white cursor-pointer p-2">
          <BiMessageDetail size={25} className="translate-y-1" /> Chat
        </button>
      )}
    </div>
  );
};

export default CreatedUser;
