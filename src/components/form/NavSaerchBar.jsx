import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const NavSaerchBar = ({ data }) => {
  const [value, setValue] = useState("");
  const [iscliked, setIsCliked] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("searched:", searchTerm);
  };
  return (
    <div className="w-96/ relative">
      <div
        className={`flex bg-slate-300 p-1 w-96 pl-4 ${
          value ? "rounded-t-3xl" : "rounded-3xl"
        } items-center relative max-[700px]:w-[16rem] max-[700px]:p-0 max-[700px]:pl-3 max-[350px]:w-48 max-[350px]:p-xs-s max-[350px]:pl-2`}
      >
        <FiSearch
          onClick={() => onSearch(value)}
          className="cursor-pointer max-[350px]:order-2 text-[23px] max-[700px]:text-[20px] max-[350px]:text-[19px] max-[350px]:-translate-x-3 max-[350px]:text-80 text-black hover:text-slate-800"
        />
        <input
          type="text"
          placeholder="Search"
          value={value}
          onKeyDown={() => onSearch(value)}
          onChange={handleChange}
          className="w-80 p-2 max-[700px]:p-1 max-[700px]:w-56 max-[350px]:w-44 max-[350px]:p-xs-s max-[350px]:text-sm bg-transparent outline-none focus:border-sky-500 placeholder:text-black focus:outline-1 font-semibold font-sofia text-black"
        />
      </div>
      <div
        className={`${
          value ? "flex" : "hidden"
        }   flex-col absolute shadow w-full bg-white rounded-b-lg p-1`}
      >
        {data
          ?.filter((data) => {
            const searchTerm = value.toLowerCase();
            const pname = data.pname.toLowerCase();

            return (
              searchTerm && pname.includes(searchTerm) && pname !== searchTerm
            );
          })
          .map((data, index) => (
            <div
              className="flex p-2 items-center hover:bg-neutral-300 cursor-pointer"
              key={index}
              onClick={() => {
                setIsCliked(true);
                setValue("");
                navigate(`/listing/${data._id}`);
              }}
            >
              <div className="flex items-center gap-1 p-2">
                <GrSearch className="text-2xl max-[700px]:hidden" />
                <p
                  onClick={() => {
                    onSearch(data.pname);
                  }}
                  className="font-semibold"
                >
                  {data.pname}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NavSaerchBar;
