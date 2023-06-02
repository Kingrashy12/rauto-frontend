import React, { useState } from "react";
import { EditModal } from "../../libs";

const UserBio = ({ u, profileId }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-8 p-2">
      <div className="flex gap-2 max-[350px]:flex-col items-center">
        <h2 className="font-extrabold font-sofia text-2xl">{u.name}</h2>
        <p className="font-semibold font-sofia text-neutral-600 text-base">
          @{u.username}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold font-sofia text-neutral-400 text-xs hover:underline hover:cursor-pointer">
          Followers: {u?.followers?.length}
        </span>
        {u?._id === profileId ? (
          <button
            className="bg-transparent border-2 border-black p-2 rounded-md outline-none text-black font-semibold hover:bg-black hover:text-white"
            onClick={() => setOpen(true)}
          >
            Edit Profile
          </button>
        ) : (
          <button className="bg-transparent border-2 border-black p-2 rounded-md outline-none text-black font-semibold hover:bg-black hover:text-white">
            Follow
          </button>
        )}
      </div>
      {open && <EditModal open={open} setOpen={setOpen} u={u} />}
    </div>
  );
};

export default UserBio;
