'use client'
import { Swiper , SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow,Pagination,Navigation} from 'swiper';
import slide_image_1 from '../../assets/images/img-1.png';
import slide_image_2 from '../../assets/images/img-2.png';
import slide_image_3 from '../../assets/images/img-3.png';
import slide_image_4 from '../../assets/images/img-4.png';
import slide_image_5 from '../../assets/images/img-5.png';
import Image from "next/image";


const Categories = () => {
    const categories=[
       
        {
         title:"Arts & Design",
         img:"https://cdn-share.almentor.net/images/f319489fcd87b41e731f9e960301526f2c1b20e2787f7b6ff72087da9e907581",
        },
        {
         title:"Soft Skills",
         img:"https://cdn-share.almentor.net/images/b652b28c96255a87dd111af86644badcc8f2f49d6311674d365aec7f177cefe8",
        },
        {
         title:"Media, Photography & Film",
         img:"https://cdn-share.almentor.net/images/59fa91ac8678ae7f3428a57973f630d81751457845330688d737bb0bef417cb3",
        },
        {
         title:"Business Management",
         img:"https://cdn-share.almentor.net/images/1628ecb92f027d9341e12ed06468fe46ac0d22e838df7b6674d23ed5d2d1a3a1",
        },
        {    
         title:"Media, Photography & Film",
         img:"https://cdn-share.almentor.net/images/59fa91ac8678ae7f3428a57973f630d81751457845330688d737bb0bef417cb3",
       },
        {
         title:"Media, Photography & Film",
         img:"https://cdn-share.almentor.net/images/59fa91ac8678ae7f3428a57973f630d81751457845330688d737bb0bef417cb3",
        },
   
      ];
     return (
       <div className="container w-full sm:w-full m-auto ">
         <h1 className="text-[30px] font-medium pl-2 pb-[30px]">Course Categories</h1>
         <div
           id="carouselExampleControls"
           className="relative"
           data-te-carousel-init
           data-te-ride="carousel"
         >
           {/* <!--Carousel items--> */}
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
                 slidesPerView: 2,
                 spaceBetween: 15,
               },
               1024: {
                 slidesPerView: 3,
                 spaceBetween: 15,
               },
               1280: {
                 slidesPerView: 4,
                 spaceBetween: 30,
               },
             }}
           >
             {categories.map((categories) => (
               <SwiperSlide key={categories.name}>
                 <div className="flex items-center  text-center justify-center w-[360px] h-[150px] rounded-[20px]">
                   <Image
                     src={slide_image_1}
                     alt="img"
                     width={300}
                     height={250}
                     className=" absolute z-0 "
                   />
                   <h4
                     className="relative flex justify-center items-center z-20 text-center 
                    text-white font-semibold "
                   >
                     {categories.title}
                   </h4>
                 </div>
               </SwiperSlide>
             ))}
           </Swiper>
   
          
         </div>
         <button
           className="flex m-auto my-[60px]
               w-[160px] border-[2px] h-[40px] justify-center py-[6px]
               rounded border-primary text-primary hover:border-none
               hover:bg-primary hover:text-white
           "
         >
           Browse Courses
         </button>
       </div>
     );
}

export default Categories