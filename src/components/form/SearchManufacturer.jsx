import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { pfilter } from "../../data/productfilter";

const SearchManufacturer = ({ setManufacturer, manufacturer }) => {
  const [query, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  function search(e) {
    e.preventDefault();
    // setSearchParams({ query });
    const push = window.location === `/make/${query}`;
    push();
  }
  // useEffect(() => {
  //   const input = document.getElementById("b-input");
  //   input.addEventListener("keyup", (e) => {
  //     if (e.key === "Enter") {
  //       // navigate(`/make/${query}`);
  //       search();
  //     }
  //   });
  // }, [query]);
  return (
    <div className="flex flex-col relative w-full">
      <div
        className={`flex bg-slate-600 items-center w-full ${
          query ? "rounded-t-[5px]" : "rounded-[5px]"
        }`}
      >
        <RiSearchLine className="text-white text-4xl p-1 cursor-pointer" />
        <input
          type="text"
          id="b-input"
          value={query}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className="p-3 bg-transparent outline-none font-sofia w-10/12 font-semibold border-none text-white placeholder:text-white"
          placeholder="Search Manufacturer"
        />
      </div>
      {query && (
        <div className="flex flex-col bg-white shadow shadow-black p-2 w-full h-auto rounded-b-lg">
          {pfilter
            .filter((p) => {
              const name = p.text.toLowerCase();
              const searchTerm = query.toLowerCase();

              return (
                searchTerm && name.includes(searchTerm) && name !== searchTerm
              );
            })
            .map((p, index) => (
              <div className="flex flex-col" key={index}>
                <Link to={`/make/${p.value}`}>
                  <p className="font-semibold font-sofia text-black rounded-[6px] hover:bg-slate-300 p-2">
                    {p.text}
                  </p>
                </Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default SearchManufacturer;
