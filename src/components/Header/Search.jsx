"use client";

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export const Search = () => {
  // const [value , setValue] = useState('Search courses, topics, instructors');
  // const searchHandler =() => {
  //   const {target} = event;
  //   setValue(target, value);
  // }
  return (
    <form className="w-[250px] relative my-3 ">
      <div className="relative  border-r-2 border-black ">
        <input
          type="search"
          name="search"
          className=" bg-slate-100 h-10 px-2 w-[95%] rounded-md border text-xs focus:outline-none"
          placeholder="Search courses, topics, instructors"
        />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-4">
          <BiSearchAlt2 className="text-secondary text-2xl " />
        </button>
      </div>
    </form>
  );
};
