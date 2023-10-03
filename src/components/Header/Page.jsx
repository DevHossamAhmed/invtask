"use client" ;

import { useContext , useEffect , useState } from "react";

// next image
import Image from "next/image";

// Logo
import Logo from '../../assets/images/Logo.webp'

// react scroll
import {Link} from 'react-scroll';

// components
import { ResSearch } from "./Research";
import { Search } from "./Search";
import SignupBtn from "./SignupBtn";
import LoginBtn from "./LoginBtn";
import Language from "./Language";
import DarkMode from "./DarkMode";


// media query hook
import { useMediaQuery } from "react-responsive";


// Icons
import { BiMenuAltRight , BiX} from "react-icons/bi"
import { IoIosLogIn } from 'react-icons/io'
import { CgUserAdd } from 'react-icons/cg'


const Header = () => {

  const [header , setHeader] = useState(false);
  const [nav , setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query:'(min-width:1300px)',
  });

  useEffect(()=>{
    const handleScroll = () =>{
      // header
      if (window.scrollY > 100) {
        setHeader(true)
      } else {
        setHeader(false)
      }
    };

    // add event listener
    window.addEventListener('scroll' , handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener('scroll' , handleScroll);
    };

  });

  return (
    <header className={`${ header ? ' shadow-md py-2' : ' shadow-none py-4'} flex fixed w-full z-50 
    bg-white  dark:bg-[#262729]
  `}>
      <div className="flex mx-auto xl:container flex-col xl:flex-row xl:items-center xl:justify-between ">
        <div className="flex gap-4 items-center px-4">
          {/* nav open menu */}
          <div onClick={()=>setNav(!nav)} className="cursor-pointer xl:hidden">
            {nav ? (<BiX className="text-2xl"/>) : (<BiMenuAltRight className="text-2xl"/>)}
          </div>
          {/* logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer flex md:mr-[400px] xl:mr-0"
          >
            <Image src={Logo} alt="logo" width={100} height={40}/>
          </Link>

          <ResSearch />
          
        </div>
        {/* nav */}
        <nav className={`${
          nav ? 'max-h-max py-8 px-4 xl:py-0 xl:px-0' : 'max-h-0 xl:max-h-max'
        } flex flex-col xl:flex-row xl:gap-3 w-full bg-white dark:bg-[#262729] dark:text-white gap-y-6 overflow-hidden items-center text-secondary
        `}>
          <div className="xl:hidden flex  justify-center items-center text-center 
          border-b-[1px] border-b-black dark:border-b-slate-100  h-[70px]">
          <button className="underline flex justify-center text-primary items-center gap-1 ">
            <IoIosLogIn/>
            Login
          </button> 
          <span className="w-[1px] h-[25px] bg-black dark:bg-slate-100 mx-7 rounded-md"></span>
          <button className="underline flex justify-center items-center gap-1 text-primary">
            <CgUserAdd/>
            SignUp
          </button> 
          </div>
          <Link
            to="courses"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer hover:text-violet-600 "
          >Courses</Link>
          <Link
            to="e-training"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer hover:text-violet-600"
          >E-Training</Link>
          <Link
            to="seminars"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer hover:text-violet-600"
          >Seminars</Link>
          <Link
            to="news"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer hover:text-violet-600"
          >News</Link>
          <Link
            to="contactus"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer hover:text-violet-600"
          >Contact Us</Link>
          <div className="xl:hidden flex  justify-center items-center text-center">
          <DarkMode/> <span className="w-[1px] h-[30px]  bg-black dark:bg-slate-100 mx-7 rounded-md"></span>
          
          <Language/>
          
          </div>
        <div className="  ml-[150px] xl:flex gap-3 items-center hidden xl:block">
        <button
            className=" border border-primary h-9 bg-white text-primary 	w-[170px]
            rounded-md
           hover:bg-primary
           hover:text-white
          "
          >
            Subscribe 
          </button>
          <Search  />
          <Language />
          <DarkMode />
          <LoginBtn/>
          <SignupBtn />
        </div>
        </nav>
      </div>
    </header>
  )
}

export default Header