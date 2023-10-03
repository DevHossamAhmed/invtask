"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import Image from "next/image";
import Img from "../../assets/images/imgcard.png";

const Instructor = () => {
  const [dataInstructor, setDataInstructor] = useState([
    {
      id: 1,
      img:"https://cdn-share.almentor.net/images/630ea017e1194392164c075b742d03f6b065c9133b761736cf213042b0c09080",
      name: "Ahmed El Aawar",
      jop: " Coach and Organizational...",
    },
    {
      id : 2,
      img:"https://cdn-share.almentor.net/images/2f54a80d48304403631ce363ed4484fc6474d42303f6104f53ac5e99e86bf109",
      name:"Doha Moustafa",
      jop:"Art Teacher & Visual Artist...",
    },
    {
      id: 3,
      img:"https://cdn-share.almentor.net/images/9705b2aebf4256cddaeaaf2998b023b658139ce22834a1bd12ff92f9013fe878",
      name:"Nashwa El Fooly",
      jop:"Life Coach",
    },
    {
      id: 4,
      img:"https://cdn-share.almentor.net/images/3b02399db14bde1b3f063bb4f92d94372d2eaf0c8438328838fcd5f82f333cf0",
      name:"Mohammed Essam",
      jop:"Researcher & Assistant Teacher in the field of computer Science and AI"
    },
    {
      id: 5,
      img:"https://cdn-share.almentor.net/images/4e7673ebcfc6ce6fe749c085aec33cff556098153b4c77bccbedc92c1c3448e9",
      name:"Fadi Serry Eldin",
      jop :"Managing Director - Scitron Training",
    },
    {
        id: 5,
        img:"https://cdn-share.almentor.net/images/4e7673ebcfc6ce6fe749c085aec33cff556098153b4c77bccbedc92c1c3448e9",
        name:"Fadi Serry Eldin",
        jop :"Managing Director - Scitron Training",
      },
   
  
 
  ]);
  return (
    <div >
      <div className="container  w-full sm:w-full m-auto mt-[70px]">
        <h1 className="text-[30px] text-center font-medium pb-[30px]">
          Our instructors
        </h1>

        <p className="text-center text-secondary pb-[50px]">
          Our instructors are real world experts bringing real knowledge and
          offering unique experiences <br /> that will help you reach your
          personal and career goals.
        </p>
        <Swiper
          spaceBetween={15}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
        >
          {dataInstructor.map((dataInstructor) => (
            <SwiperSlide key={dataInstructor.id}>
              <div>
                <Image
                  src={Img}
                  alt="img"
                  width={120}
                  height={120}
                  className="rounded-full m-auto "
                />
                <h4 className="text-center font-semibold ">
                  {dataInstructor.name}
                </h4>
                <p className="text-center text-sm text-slate-500">
                  {dataInstructor.jop}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        <button
          className="flex m-auto mt-10
            w-[160px] border-[2px] h-[40px] justify-center py-[6px]
            rounded border-primary text-primary hover:border-none
            hover:bg-primary hover:text-white
        "
        >
          See all instructors
        </button>
      </div>
    </div>
  );
};

export default Instructor;
