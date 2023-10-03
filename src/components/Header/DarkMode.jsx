"use client"
import { useState , useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSun } from "react-icons/bs";




const DarkMode = () => {
  const { systemTheme , theme , setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(()=>{
    setMounted(true)
  },[])

  const renderThemeChanger = ()=> {
    if (!mounted) return null;
    const currentTheme = theme  === 'system' ? systemTheme : theme ;

    if (currentTheme === 'dark') {
      return (
        <BsSun className='w-6 h-6' role='button' onClick={()=>setTheme('light')}/>
      )
    } else {
      return (
        <BsMoonStars className='w-7 h-7' role='button' onClick={()=>setTheme('dark')}/>
      )
    }
  }

  return (
    <>
      <button className="font-semibold text-white  w-[40px] h-[40px] flex justify-center
       items-center
      text-center rounded-full bg-secondary  ml-[5px] my-auto ">

       {renderThemeChanger()}
      </button>
    </>
  );
};

export default DarkMode;
