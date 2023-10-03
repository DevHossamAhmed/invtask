'use client'

import Image from 'next/image'
import Heroimg from '../../assets/images/Hero.webp'
import { BiSearchAlt2 } from 'react-icons/bi'

const Hero = () => {
  return (

        <div className='banner flex justify-center items-center text-center xl:text-start'>
            <div className=''>
                <h1 className='text-[25px]'>Your most trusted training and consulting partner</h1>
                <p> We&apos;ll help you find the right course</p>
                <button className=" border border-primary h-9 mt-[20px] text-white	w-[170px]
                   bg-primary rounded-md
                   hover:bg-white
                   hover:text-primary
                  ">
                Subscribe now
                </button>
            </div>
        </div>

  )
}

export default Hero