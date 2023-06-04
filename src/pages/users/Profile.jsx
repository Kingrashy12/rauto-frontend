import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserBio, UserHero, UserLinks } from "../../components";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../hooks/api";
import axios from "axios";

const Profile = () => {
  const auth = useSelector((state) => state.auth);
  const profileId = auth?._id;
  const { username } = useParams();

  const [u, setU] = useState([]);
  async function getUser() {
    const fetchUser = await axios.get(`${BASE_URL}/users/${username}`);
    const fetchedUser = await fetchUser.data;
    setU(fetchedUser);
    console.log(fetchedUser);
  }

  useEffect(() => {
    document.title = `${u?.name} - RAuto`;
  });
  useEffect(() => {
    getUser();
  });
  return (
    <div className="mt-10 relative shadow shadow-black rounded-lg w-1/3 p-5 ml-5 max-[1024px]:w-1/2 max-[800px]:w-95% max-[700px]:w-95% max-[700px]:ml-2">
      <div className="flex flex-col border border-slate-400 rounded-lg p-1">
        <UserHero user={u} />
        <UserBio u={u} profileId={profileId} />
        <hr className="text-slate-700 mt-2 mb-2" />
        <UserLinks user={profileId} u={u} />
      </div>
    </div>
  );
};

export default Profile;
