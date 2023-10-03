'use client'

import { Swiper , SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import { FaQuoteLeft } from 'react-icons/fa';

import Image from "next/image";

import Avatar from '../../assets/images/avatar1.jpg'

const testimonialData = [
    {
        message: 'The contents are informative and easy to understand. The courses feature well-researched content that presents information in a clear and understandable way. Content is presented in an engaging and interactive way using videos',
        avatar: './assets/images/avatar1.jpg',
        name: 'jane doe',
        job: 'media buyer'
    },
    {
        message: 'The lecturers are experienced and competent. Courses are presented by experienced and competent lecturers in their fields. They have the ability to explain complex concepts in a simple, easy-to-understand way',
        avatar: '../../assets/images/avatar2.jpg',
        name: 'jane doe',
        job: 'media buyer'
    },
    {
        message: 'The lecturers are experienced and competent. Courses are presented by experienced and competent lecturers in their fields. They have the ability to explain complex concepts in a simple, easy-to-understand way',
        avatar: '../../assets/images/avatar3.jpg',
        name: 'jane doe',
        job: 'media buyer'
    },
]

const Testimonialslider = () => {
  return (
    <div className="pt-[40px] pb-[40px]">
        <Swiper
            pagination={{
                clickable:true,
                dynamicBullets:true,
            }}
            modules={[Pagination]}
            grabCursor={true}
            className="h-[550px] xl:h-[400px] p-7 dark:bg-[#262729] "
        >
            {testimonialData.map((person,index)=>{
                const { message, avatar, name, job} = person;
                return <SwiperSlide key={index}>
                    <div className="flex flex-col justify-center items-center text-center">
                        <FaQuoteLeft className="text-5xl text-primary mb-6"/>
                        <div className="text-xl px-[10px] xl:text-2xl max-w-[874] mb-12 font-medium ">{message}</div>
                        <Image src={Avatar} alt="avatar" className="avatar-img mb-4 "/>
                        <div className="text-lg font-medium">{name}</div>
                        <div className="text-secondary">{job}</div>
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    </div>
  )
}

export default Testimonialslider