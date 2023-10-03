'use client'

import Image from 'next/image'
import creditimg from '../../assets/images/certificate-banner.webp'
import cmalogo from '../../assets/images/cma-logo.webp'
import { BiSearchAlt2 } from 'react-icons/bi'

const Credits = () => {
  return (
   <div className="container m-auto">
     <div className='hero bg-white dark:bg-[#262729] relative rounded-md flex items-center justify-center '>
        <div className='flex mx-[10px] container text-[18px] md:pt-[50px] w-full m-auto gap-2 flex-col xl:flex-row '>
            <div className='heroImg md:ml-[15%] xl:ml-0 md:w-full xl:w-[50%]'>
                <Image src={creditimg} alt='hero'  />
            </div>
            <div className='  xl:w-[50%] bg-white dark:bg-transparent  rounded-md p-[15px] text-center xl:text-left' >
                <h1 className='text-[25px]'>The International Credits</h1>
                <p className='text-[15] text-secondary pb-10'> 
                In line with our commitment to excellence, we offer a number of training courses to prepare professionals for certificate exams offered by international associations. By attending these courses in full and successfully completing the certification  requirements, participants will receive a special certificate (from the certification authority) recognizing their dedication and commitment and, in many cases, helping them earn valuable continuous education credit.
                </p>
                
            </div>
        </div>
    </div>
   </div>
  )
}

export default Credits