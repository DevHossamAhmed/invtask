'use client'

import Image from 'next/image'
import train from '../../assets/images/train.svg'
import markter from '../../assets/images/markter.svg'
import { BiSearchAlt2 } from 'react-icons/bi'

const Join = () => {
  return (
    <div className="container m-auto  dark:bg-transparent">
        <div className='hero relative mt-[20px] dark:bg-transparent flex items-center justify-center '>
            <div className='flex mx-[10px] container text-[18px] md:pt-[50px] w-full m-auto gap-2 flex-col xl:flex-row '>
                <div className='text-center bg-white dark:bg-[#262729] rounded-md py-[20px] px-[20px]'>
                    <Image src={train} alt='train' width={60} height={60} className='m-auto mb-[20px] mt-[20px]'/>
                    <h1 className='text-[20px] font-semibold'>Want to train?</h1>
                    <p>Join the coaching staff and share your skills and experience to earn extra money</p>
                
                    <button className='btn2 h-[30px] w-[100px] m-auto mt-[15px] mb-[15px]'>Join Now</button>

                </div>
                <div  className='text-center bg-white dark:bg-[#262729] rounded-md py-[20px] px-[20px]'>
                    <Image src={markter} alt='train' width={60} height={60} className='m-auto mb-[20px] mt-[20px]'/>
                    <h1 className='text-[20px] font-semibold'>Are you a professional marketer?</h1>
                    <p>If you are influential on social media and have experience in marketing Join our marketing team to make some money
                    </p>
                    <button className='btn2 h-[30px] w-[100px] m-auto mt-[15px] mb-[15px]'>Join Now</button>
                </div>
            </div>
    </div>
    </div>
  ) 
}

export default Join