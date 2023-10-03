import React from "react";
// import Styles from "./Copyright.module.css";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const Copyright = () => {
  return (
    <div className="">
      <footer className="">
      <div className="container flex flex-col sm:flex-col lg:flex-row m-auto py-[50px] ">
        <div className=" flex text-[10px] sm:text-[12px] md:text-[15px] justify-center  gap-10 pb-7 sm:pb-0 md:pb-0  ">
          <span className="text-black dark:text-white text=[10px] sm:text-[12px] md:text-[15px] lg:text-[18px] flex gap-2 ">
            © 2023
            <a
              classNameName="font-semibold pl-[20px]"
              href="https://www.Invesment.net/home"
            >
              Invesment
            </a>
          </span>
          <ul className="flex gap-3 cursor-pointer text-black dark:text-white  text=[10px] sm:text-[12px] md:text-[15px] lg:text-[18px]">
            <li className="hover:underline"> Terms of use</li>
            <li className="hover:underline"> Privacy policy</li>
            <li className="text-cyan-600 dark:text-white  hover:underline"> Help Center</li>
          </ul>
        </div>
        <div className="flex gap-6  m-auto text-[20px] ">
          <a href="#" className="m-auto hover:text-primary ">
            <BiLogoLinkedin />
          </a>
          <a href="#" className="m-auto hover:text-primary">
            <BiLogoFacebook />
          </a>
          <a href="#" className="m-auto hover:text-primary">
            <BiLogoInstagram />
          </a>
          <a href="#" className="m-auto hover:text-primary">
            <BiLogoYoutube />
          </a>
          <a href="#" className="m-auto hover:text-primary">
            <BiLogoTwitter />
          </a>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Copyright;
