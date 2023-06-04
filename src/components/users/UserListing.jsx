import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../hooks/api";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";

const UserListing = () => {
  const { username } = useParams();
  const [item, setItem] = useState([]);
  const [user, setUser] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Fetching the profile users Listing
  async function getUserListin() {
    // setIsLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/listing/user/${username}`);
      const fetchedItem = await response.data;
      setItem(fetchedItem);
      console.log("User Listings", item);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      // setIsLoading(false);
    }
  }

  // Fetching the user
  async function getUser() {
    const fetchUser = await axios.get(`${BASE_URL}/users/${username}`);
    const fetchedUser = await fetchUser.data;
    setUser(fetchedUser);
    console.log("profile user", fetchedUser);
  }

  useEffect(() => {
    if (!item || item.length === 0) {
      setIsLoading(true);
      setEmpty(true);
    } else {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    getUserListin();
    getUser();
  });
  return (
    <div className="flex flex-col relative w-full mt-5">
      {isLoading ? (
        <Skeleton varaint="text" width={`150px`} height={`50px`} />
      ) : (
        <h2 className="text-2xl font-sofia max-[700px]:text-center">
          All {user.name} Listing
        </h2>
      )}
      <div className="flex flex-wrap">
        {item.map((i) => (
          <div
            className="flex z-0 flex-col ml-5 max-[700px]:ml-2 relative mt-2 bg-slate-200 w-56 rounded-lg max-[700px]:rounded-md shadow-lg cursor-pointer hover:shadow-black max-[700px]:w-44 max-[415px]:w-46 max-[390px]:w-42 max-[375px]:w-40 max-[350px]:w-36"
            onClick={() => navigate(`/listing/${i._id}`)}
          >
            {isLoading ? (
              <Skeleton variant="text" width={`100%`} height={`144px`} />
            ) : (
              <img
                src={i?.pImage?.url}
                alt=""
                // style={{ objectFit: "cover" }}
                className="w-full h-36 rounded-t-lg max-[700px]:rounded-t-md"
              />
            )}
            <div className="flex flex-col p-3">
              {isLoading ? (
                <Skeleton varaint="text" width={`150px`} height={`35px`} />
              ) : (
                <h2 className="text-base font-semibold font-sofia">
                  {i?.pname}
                </h2>
              )}

              <div className="text-neutral-400 border-b border-b-neutral-300"></div>
              {isLoading ? (
                <Skeleton varaint="text" width={`150px`} height={`40px`} />
              ) : (
                <h3 className="font-semibold text-xl font-sofia mt-3 ">
                  &#8358; {i?.pPrice?.toLocaleString()}
                </h3>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListing;
