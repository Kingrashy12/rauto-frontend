import React from "react";
import { Male } from "../../asset";
import { Skeleton } from "@mui/material";

const Avatar = ({
  user,
  isLoading,
  isNav,
  isListImg,
  onClick,
  className,
  hasBorder,
}) => {
  return (
    <>
      {user?.userProfile ? (
        <>
          {isLoading ? (
            <Skeleton
              variant="circular"
              width={`${isNav ? "2.5rem" : "4rem"}`}
              height={`${isNav ? "2.5rem" : "4rem"}`}
            />
          ) : (
            <img
              src={user.userProfile?.url}
              onClick={onClick}
              alt="Avatar"
              className={`${className} ${
                isNav ? "w-10 h-10 rounded-full cursor-pointer" : "w-16 h-16"
              } ${hasBorder ? "border-2 border-black" : ""}`}
            />
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <Skeleton
              variant="circular"
              width={`${isNav ? "2.5rem" : "4rem"}`}
              height={`${isNav ? "2.5rem" : "4rem"}`}
            />
          ) : (
            <img
              src={Male}
              alt="Avatar"
              onClick={onClick}
              className={`${className} ${
                isNav ? "w-10 h-10 rounded-full cursor-pointer" : "w-16 h-16"
              } ${hasBorder ? "border-2 border-black" : ""}`}
            />
          )}
        </>
      )}
    </>
  );
};

export default Avatar;
