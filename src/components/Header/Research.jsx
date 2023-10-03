"use client";

import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export const ResSearch = () => {

  return (
    <form className="flex relative border-none items-center xl:hidden">
      <div className="relative border-none xl:hidden flex justify-between ">
        <input
          type="search"
          name="search"
          className=" h-10 text-end  text-xs focus:outline-none border-none"
          placeholder="Search...."
        />
        <button className="absolute right-1 top-1/2 -translate-y-1/2 ">
          <BiSearchAlt2 className="text-secondary text-2xl ml-3 " />
        </button>
      </div>
    </form>
  );
};
