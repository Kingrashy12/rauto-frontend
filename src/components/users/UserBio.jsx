import React, { useEffect, useState } from "react";
import { EditModal } from "../../libs";
import { Skeleton } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../hooks/api";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

const UserBio = ({ u, profileId }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [following, setFollowing] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    if (!u._id) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [u]);

  const dispatch = useDispatch();

  async function followUser() {
    setFollowing(true);
    try {
      await axios.patch(`http://localhost:4000/users/${username}/follow`, {
        userId: profileId,
      });
      toast.success(`Action suceess`);
    } catch (error) {
      console.log({ error: error.message });
      toast.error({ error: error.message });
    } finally {
      setFollowing(false);
    }
  }
  const isfollowing = u.followers.includes(profileId);

  useEffect(() => {
    if (following) {
      document.getElementById("requestBTN").innerText = "Loading...";
    }
  });
  return (
    <div className="mt-8 p-2">
      <div className="flex gap-2 max-[350px]:flex-col items-center">
        {isLoading ? (
          <Skeleton varaint="text" width={`150px`} height={`30px`} />
        ) : (
          <h2 className="font-extrabold font-sofia text-2xl">{u.name}</h2>
        )}
        {isLoading ? (
          <Skeleton varaint="text" width={`90px`} height={`30px`} />
        ) : (
          <p className="font-semibold font-sofia text-neutral-600 text-base">
            @{u.username}
          </p>
        )}
      </div>
      <div className="flex justify-between items-center">
        {isLoading ? (
          <Skeleton varaint="text" width={`90px`} height={`30px`} />
        ) : (
          <span className="font-semibold font-sofia text-neutral-400 text-xs hover:underline hover:cursor-pointer">
            Followers: {u?.followers?.length}
          </span>
        )}
        {u?._id === profileId ? (
          <>
            {isLoading ? (
              <Skeleton varaint="text" width={`100px`} height={`50px`} />
            ) : (
              <button
                className="bg-transparent border-2 border-black p-2 rounded-md outline-none text-black font-semibold hover:bg-black hover:text-white"
                onClick={() => setOpen(true)}
              >
                Edit Profile
              </button>
            )}{" "}
          </>
        ) : (
          <>
            {isLoading ? (
              <Skeleton varaint="text" width={`100px`} height={`50px`} />
            ) : (
              <button
                id="requestBTN"
                className={`${
                  isfollowing
                    ? "bg-black text-white border-none outline-none"
                    : "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white"
                }  p-2 rounded-md outline-none font-semibold`}
                onClick={followUser}
              >
                {isfollowing ? "Unfollow" : "Follow"}
              </button>
            )}{" "}
          </>
        )}
      </div>
      {open && <EditModal open={open} setOpen={setOpen} u={u} />}
    </div>
  );
};

export default UserBio;
