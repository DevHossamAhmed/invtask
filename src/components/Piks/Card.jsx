import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import { BiStopwatch } from 'react-icons/bi';
import { BsBookmark } from 'react-icons/bs';

// images
import Card1 from "../../assets/images/1.png";


const Card = ({item}) => {

  return (
            

    <div className=" w-full my-[50px] ">
     
      <div className="container m-auto flex">
        <Swiper
          spaceBetween={15}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          grabCursor={true}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
              spaceBetween: 15,
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
              spaceBetween: 10,
            },
          }}
        >
          {item.map((val) => 

              
            <SwiperSlide key={val.id} className='mx-[10px] xl:mx-[50] '>
              <div className="card  "> 
                <div className="cardimage">
                  <Image src={Card1} alt="card" className="img-card" width={230} height={140}/>
                  <span className="item-span text-[12px] px-[5px] bg-slate-300 items-center w-[235px] flex">
                    <BiStopwatch className="flex mr-[5px] text-[15px] text-cyan-500" />{" "}
                    4h 55m / 45 Lessons
                  </span>
                </div>
                <h4 className="cardtitle">{val.title}</h4>
                <div className="flex items-center item-inst ">
                  <p className="n-inst flex justify-between w-full text-slate-400  items-center">
                    {val.name}
                    <span
                      className="bookmark flex  bg-slate-300
                     w-[40px] h-[40px] rounded-full "
                    >
                      <BsBookmark className="text-center text-black items-center m-auto text-[18px]" />
                    </span>
                  </p>
                </div>
              </div>
              
            </SwiperSlide>
          )}
        </Swiper>
      </div>

    </div>
  );
}

export default Card