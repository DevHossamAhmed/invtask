'use client'
import Image from "next/image";
import React from "react";
import Footerlogo from "../../assets/images/footerlogo.webp";
import google from "../../assets/images/play-store.svg";


import Copyright from "./Copyright";

const Footer = () => {
  return (
    // <!-- Footer container -->
    <footer className=" w-full items-center text-black dark:text-white  dark:bg-[#262729] text-center lg:text-left mt-[40px]">
    <div className=" container m-auto  py-10  ">
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* <!-- logo Elements section --> */}
        <div className="px-[10%]">
          <h6 className="mb-4 flex items-center justify-center font-semibold uppercase xl:justify-start">
            <Image
              src={Footerlogo}
              alt="logo"
              className="w-[70px] items-center dark:bg-white"
            />
          </h6>
          <p className="mb-4">
            <a
              href="#!"
              className="text-black dark:text-white hover:underline "
            >
              About
            </a>
          </p>
          <p className="mb-4">
            <a
              href="#!"
              className="text-black dark:text-white hover:underline"
            >
              Press
            </a>
          </p>
          <p className="mb-4">
            <a
              href="#!"
              className="text-black dark:text-white hover:underline"
            >
              Team
            </a>
          </p>
          <p className="mb-4">
            <a
              href="#!"
              className="text-black dark:text-white hover:underline"
            >
              Contact
            </a>
          </p>
        </div>
        {/* <!-- Products section --> */}
        <div className="">
          <h6 className="mb-4 flex justify-center font-semibold uppercase xl:justify-start ">
            Explore
          </h6>
          <p className="mb-4">
            <a
              href="#!"
              className="text-black dark:text-white hover:underline"
            >
              Browse courses
            </a>
          </p>
          <p className="mb-4">
            <a
              href="#!"
              className="text-black dark:text-white hover:underline"
            >
              Popular courses
            </a>
          </p>
          <p className="mb-4">
            <a
              href="#!"
              className="text-black dark:text-white hover:underline"
            >
              Subscription Plans
            </a>
          </p>
          <p>
            <a
              href="#!"
              className="text-black dark:text-white hover:underline"
            >
              Instructors
            </a>
          </p>
          <p className="pt-[15px]">
            <a
              href="#!"
              className="text-black dark:text-white hover:underline "
            >
              Learning Partners
            </a>
          </p>
        </div>
        {/* <!-- Useful links section --> */}
        <div className="">
          <h6 className="mb-4 flex justify-center font-semibold uppercase xl:justify-start ">
            Business
          </h6>
          <p className="mb-4 justify-center">
            <a href="#!" className="text-black justify-center dark:text-white underline">
              Become an instructor
            </a>
          </p>
          <button
            className="bg-white w-[160px] leading-[30px] text-[16px]
              h-[50px] text-primary
              border rounded-md my-3 
              border-primary
            hover:bg-primary  hover:text-white 
              "
          >
            Subscribe now
          </button>
        </div>
        {/* <!-- Contact section --> */}
        <div>
          <h6 className="mb-4 flex justify-center font-semibold uppercase xl:justify-start ">
            CONTACT
          </h6>
          <p className="mb-4 flex items-center justify-center xl:justify-start ">
            <Image
              src={google}
              alt="google play store"
              className="w-[160px]"
            />
          </p>
        </div>
      </div>
    </div>

    <Copyright />
  </footer>
  );
};

export default Footer;
