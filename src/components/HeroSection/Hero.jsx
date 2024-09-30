import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import AOS from "aos";
import "aos/dist/aos.css";
import { MoveRight} from "lucide-react"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';


const Hero = () => {
  const [zoomClass, setZoomClass] = useState('zoom-in');

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const handleSlideChange = (swiper) => {
    // Alternate between zoom-in and zoom-out effects when the slide changes
    setZoomClass('zoom-out');
    setTimeout(() => setZoomClass('zoom-in')); // Adjust the timing for smooth transitions
  };

  return (
    <div className='pt-3  '>
    <Swiper
    // install Swiper modules
    modules={[ Navigation, Pagination, A11y, EffectFade, Autoplay]}
    effect={'fade'}
    fadeEffect={{ crossFade: true }}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    // autoplay={{
    //     delay: 2500,
    // }}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={handleSlideChange}
    className='mySwiper'
  >
    <SwiperSlide>
        <div className='w-full h-[732px] relative group '>
            <div className='absolute w-full h-full flex justify-between items-center xl:px-20 top-0 left-0 right-0 bottom-0 '>
                <div>
                  <div className='flex items-center gap-x-4 '>
                  <p className='text-[56px] font-qilona text-white opacity-0 transition-all duration-1500 ease-in-out transform  group-hover:opacity-100' >Eco </p>
                  <p className='text-[96px] font-karid font-normal text-white opacity-0 transition-all duration-1500 ease-in-out transform translate-y-[-100%] group-hover:opacity-100 group-hover:translate-y-0 '>crafted</p> 
                  </div>
                   
                  <div className='flex items-center gap-x-4 -mt-10 '>
                    <p className='text-[96px] font-qilona text-white font-normal  opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0'>Elegance</p> 
                    <p className='text-[56px] font-qilona text-white opacity-0 transition-all duration-1500 ease-in-out transform  group-hover:opacity-100'>Series</p>
                  </div>
                 <Link to="/collection/eco" >                
                  <div className='w-[139px] h-[40px] rounded-[6px] bg-white border border-black flex justify-center items-center gap-x-2 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0  '>
                     <p className='font-semibold text-[16px] font-workSans text-[#101010] '>Explore</p> <MoveRight />
                  </div>
                  </Link>
                  <div className='absolute bottom-0 progressBar '>
                   <div className='w-[62px] h-[6px] rounded-[10px] bg-white absolute'></div>
                    <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99] '></div>
                    <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona text-[76px] outlined-text '>1 </p> 
                    <p className='text-[46px] font-qilona text-white font-normal mt-4'>of 3</p>
                    </div>
                    
                  </div>
               
                </div>
                
                
                <div className={`2xl:w-[613px] xl:w-[500px] h-full flex items-center opacity-0 transition-all duration-1500 ease-in-out transform skew-y-3 group-hover:opacity-100 group-hover:skew-y-0 `} >
                      <img src="/img/EcoGroup.svg"/>              
                </div>
            
            </div>
            <img src="/img/EcoCrafted.png" className='w-full h-full  '/>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='w-full h-[732px] relative group '>
            <div className='absolute w-full h-full flex justify-between items-center px-20 top-0 left-0 right-0 bottom-0 '>
                <div>
                  <p className='text-[56px] font-qilona text-white opacity-0 transition-all duration-1500 ease-in-out transform  group-hover:opacity-100  ' >Viva </p>
                  <p className='text-[96px] font-qilona text-white font-normal -mt-10 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-40%] group-hover:opacity-100 group-hover:translate-x-0 '>Wood</p>  
                  <p className='text-[56px] font-qilona font-normal text-white -mt-14 text-end opacity-0 transition-all duration-1500 ease-in-out transform  group-hover:opacity-100' >Series</p>
               
                  <Link to="/collection/viva" >                
                  <div className='w-[139px] h-[40px] rounded-[6px] bg-white border border-black flex justify-center items-center gap-x-2 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0  '>
                     <p className='font-semibold text-[16px] font-workSans text-[#101010] '>Explore</p> <MoveRight />
                  </div>
                  </Link>
                  <div className='absolute bottom-0 progressBar '>
                   <div className='w-[82px] h-[6px] rounded-[10px] bg-white absolute'></div>
                    <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99] '></div>
                    <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona text-[76px] outlined-text '>2 </p> 
                    <p className='text-[46px] font-qilona text-white font-normal mt-4'>of 3</p>
                    </div>
                    
                  </div>
               
                </div>
                
                
                <div className={`2xl:w-[613px] xl:w-[500px] h-full flex items-center opacity-0 transition-all duration-1500 ease-in-out transform scale-75 group-hover:opacity-100 group-hover:scale-100 `} >
                      <img src="/img/VivaGroup.svg"/>              
                </div>
            
            </div>
            <img src="/img/VivaWood.png" className='w-full h-full  '/>
        </div>
    </SwiperSlide>

    <SwiperSlide>
        <div className='w-full h-[732px] relative group '>
            <div className='absolute w-full h-full flex justify-between items-center xl:px-20 top-0 left-0 right-0 bottom-0 '>
                <div>
                  <p className='text-[56px] font-qilona text-white opacity-0 transition-all duration-1500 ease-in-out transform  group-hover:opacity-100 '>Legacy </p>
                  <p className='text-[96px] font-qilona text-white font-normal -mt-9 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-40%] group-hover:opacity-100 group-hover:translate-x-0 '>Luxicore</p>
                  <p className='text-[56px] font-qilona font-normal text-white text-end -mt-12  opacity-0 transition-all duration-1500 ease-in-out transform  group-hover:opacity-100'>Series</p>
                  <Link to="/collection/luxicore" >                
                  <div className='w-[139px] h-[40px] rounded-[6px] bg-white border border-black flex justify-center items-center gap-x-2 opacity-0 transition-all duration-1500 ease-in-out transform translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0  '>
                     <p className='font-semibold text-[16px] font-workSans text-[#101010] '>Explore</p> <MoveRight />
                  </div>
                  </Link>
                  <div className='absolute bottom-0 progressBar '>
                   <div className='w-[138px] h-[6px] rounded-[10px] bg-white absolute'></div>
                    <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99] '></div>
                    <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona text-[76px] outlined-text '>3 </p> 
                    <p className='text-[46px] font-qilona text-white font-normal mt-4'>of 3</p>
                    </div>
                    
                  </div>
               
                </div>
                
                
                <div className={`2xl:w-[613px] xl:w-[500px] h-full flex items-center opacity-0 transition-all duration-1500 ease-in-out transform skew-y-3 group-hover:opacity-100 group-hover:skew-y-0`}>
                      <img src="/img/LuxicoreGroup.svg"/>              
                </div>
            
            </div>
            <img src="/img/Luxicore.png" className='w-full h-full  '/>
        </div>
    </SwiperSlide>
   
    
    
    </Swiper>
    </div>
  
  )
}

export default Hero




