import React from "react";
import { FaCar, FaUsers } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { useGetAllListingsQuery } from "../../hooks/ListingApi";
import { useSelector } from "react-redux";

const AboutSection = () => {
  const { data } = useGetAllListingsQuery();
  const f = useSelector((state) => state.users);
  const user = 122309;
  const listing = 265866;
  const sold = 6748;
  return (
    <div className="bg-black p-6 relative w-full flex flex-col justify-center items-center gap-5 max-[700px]:justify-center">
      <h1 className="font-semibold font-sofia text-xl text-white">
        Join thousand of users on the number 1 automobile marketplace
      </h1>
      <div className="flex flex-wrap gap-3 max-[700px]:items-center justify-center">
        <div className="bg-slate-200 p-5 rounded-lg flex flex-col cursor-pointer hover:-translate-y-2 transition-all duration-1000 justify-between w-56 h-48 relative">
          <FaUsers size={30} className="text-blue-600" />
          <p className="font-bold font-sofia text-xl">{f.list?.length} Users</p>
          <p className="font-semibold font-sofia text-sm text-justify items-end">
            in the last 30 days
          </p>
        </div>
        <div className="bg-slate-200 p-5 rounded-lg flex flex-col cursor-pointer hover:-translate-y-2 transition-all duration-1000 justify-between w-56 h-48 relative">
          <FaCar size={30} className="text-green-600" />
          {/* <p className="font-bold font-sofia text-xl text-red-600">
            [{f.FetchError?.error?.error}]
          </p> */}
          <p className="font-bold font-sofia text-xl">
            {data?.length?.toLocaleString()} Listings
          </p>
          <p className="font-semibold font-sofia text-sm text-justify items-end">
            in the last 30 days
          </p>
        </div>
        <div className="bg-slate-200 p-5 rounded-lg flex flex-col cursor-pointer hover:-translate-y-2 transition-all duration-1000 justify-between w-56 h-48 relative">
          <GiCash size={30} className="text-emerald-600" />
          <p className="font-bold font-sofia text-xl">
            {sold.toLocaleString()} Sold
          </p>
          <p className="font-semibold font-sofia text-sm text-justify items-end">
            in the last 30 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
