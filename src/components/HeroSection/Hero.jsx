import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
import AOS from "aos";
import "aos/dist/aos.css";
import { MoveRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex); // Update the active slide index
  };


  const progressLine = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
  progressLine.current.style.setProperty('--progress', 1- progress);
  };

  // Helper function to get animation classes based on slide and element type
  const getAnimationClasses = (slideIndex, elementType) => {
    if (slideIndex !== activeSlide) {
      // Inactive state
      switch (elementType) {
        case 'title':
          return 'opacity-0';
        case 'subtitle':
          return 'opacity-0 translate-x-[-40%]';
        case 'button':
          return 'opacity-0 translate-x-[-100%]';
        case 'image':
          return 'opacity-0 skew-y-3 scale-75';
        default:
          return 'opacity-0';
      }
    } else {
      // Active state with specific animations
      switch (elementType) {
        case 'title':
          return 'opacity-100';
        case 'subtitle':
          return 'opacity-100 translate-x-0';
        case 'button':
          return 'opacity-100 translate-x-0';
        case 'image':
          return 'opacity-100 skew-y-0 scale-100';
        default:
          return 'opacity-100';
      }
    }
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='pt-3'>
      <Swiper
        modules={[Pagination, A11y, EffectFade, Autoplay]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={handleSlideChange}
        className='mySwiper'
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className='w-full h-[732px] relative'>
            <div className='absolute w-full h-full flex  xl:flex-row flex-col-reverse justify-end xl:justify-between items-center xl:px-20 top-0 left-0 right-0 bottom-0'>
              <div>
                <div className='flex items-center gap-x-4'>
                  <p className={`xl:text-[56px] text-[26px] font-qilona text-white transition-all duration-1500 ease-in-out ${getAnimationClasses(0, 'title')}`} >
                    Eco
                  </p>
                  <p className={`xl:text-[96px] text-[56px] font-karid font-normal text-white transition-all duration-1500 ease-in-out transform ${getAnimationClasses(0, 'subtitle')}`}>
                    crafted
                  </p>
                </div>

                <div className='flex items-center gap-x-4 -mt-7 xl:-mt-10'>
                  <p className={`xl:text-[96px] text-[56px] font-qilona text-white font-normal transition-all duration-1500 ease-in-out transform ${getAnimationClasses(0, 'subtitle')}`}>
                    Elegance
                  </p>
                  <p className={`xl:text-[56px] text-[26px] font-qilona text-white transition-all duration-1500 ease-in-out ${getAnimationClasses(0, 'title')}`} >
                    Series
                  </p>
                </div>

                <Link to="/collection/eco">
                  <div onClick={()=>handleClick()}
                    className={`w-[139px] h-[40px] rounded-[6px] bg-white  flex justify-center items-center gap-x-2 transition-all duration-1500 ease-in-out transform ${getAnimationClasses(0, 'button')}`}
                  >
                    <p className='font-semibold text-[16px] font-workSans text-[#101010]'>Explore</p>
                    <MoveRight />
                  </div>
                </Link>

                <div className='absolute bottom-0 xl:flex hidden  progressBar'>
                  {/* <div className='w-[62px] h-[6px] rounded-[10px] bg-white absolute'></div>
                  <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99]'></div> */}
                  <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona md:text-[76px] text-[46px] outlined-text'>1</p>
                    <p className='md:text-[46px] text-[36px] font-qilona text-white font-normal mt-4'>of 3</p>
                  </div>
                </div>
                <div className='absolute bottom-0 right-[24px] flex xl:hidden  progressBar'>
                  {/* <div className='w-[62px] h-[6px] rounded-[10px] bg-white absolute'></div>
                  <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99]'></div> */}
                  <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona md:text-[76px] text-[46px] outlined-text'>1</p>
                    <p className='md:text-[46px] text-[36px] font-qilona text-white font-normal mt-4'>of 3</p>
                  </div>
                </div>
              </div>

              <div
                className={`2xl:w-[613px] xl:w-[500px] w-[90vw] h-[323px] xl:mt-0 mt-20 xl:h-full flex xl:items-center transition-all duration-1500 ease-in-out ${getAnimationClasses(0, 'image')}`}
              >
                <img src="/img/EcoGroup.svg" alt="Eco Group" />
              </div>
            </div>
            <img src="/img/EcoCrafted.png" className='w-full h-full object-cover' alt="Eco Crafted" />
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className='w-full h-[732px] relative'>
            <div className='absolute w-full h-full flex xl:flex-row flex-col-reverse justify-end xl:justify-between items-center xl:px-20 top-0 left-0 right-0 bottom-0'>
              <div>
                <p className={`xl:text-[56px] text-[26px] font-qilona mt-3 xl:mt-0 text-white transition-all duration-1500 ease-in-out ${getAnimationClasses(1, 'title')}`}>
                  Viva
                </p>
                <p className={`xl:text-[96px] text-[56px] font-qilona text-white xl:-mt-10 -mt-4 font-normal transition-all duration-1500 ease-in-out transform ${getAnimationClasses(1, 'subtitle')}`}>
                  Wood
                </p>
                <p className={`xl:text-[56px] text-[26px] font-qilona font-normal xl:-mt-14 -mt-8 ml-[100px] text-white transition-all duration-1500 ease-in-out ${getAnimationClasses(1, 'title')}`}>
                  Series
                </p>

                <Link to="/collection/viva">
                  <div  onClick={()=>handleClick()}
                    className={`w-[139px] h-[40px] rounded-[6px] bg-white mt-4 xl:mt-0 flex justify-center items-center gap-x-2 transition-all duration-1500 ease-in-out transform ${getAnimationClasses(1, 'button')}`}
                  >
                    <p className='font-semibold text-[16px] font-workSans text-[#101010]'>Explore</p>
                    <MoveRight />
                  </div>
                </Link>

                <div className='absolute bottom-0 xl:flex hidden progressBar'>
                  {/* <div className='w-[82px] h-[6px] rounded-[10px] bg-white absolute'></div>
                  <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99]'></div> */}
                  <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona text-[76px] outlined-text'>2</p>
                    <p className='text-[46px] font-qilona text-white font-normal mt-4'>of 3</p>
                  </div>
                </div>
                <div className='absolute bottom-0 right-[24px] flex xl:hidden  progressBar'>
                  {/* <div className='w-[62px] h-[6px] rounded-[10px] bg-white absolute'></div>
                  <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99]'></div> */}
                  <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona md:text-[76px] text-[46px] outlined-text'>2</p>
                    <p className='md:text-[46px] text-[36px] font-qilona text-white font-normal mt-4'>of 3</p>
                  </div>
                </div>
              </div>

              <div
                className={`2xl:w-[613px] xl:w-[500px] w-[90vw] h-[323px] xl:mt-0 mt-20 xl:h-full flex xl:items-center transition-all duration-1500 ease-in-out ${getAnimationClasses(1, 'image')}`}
              >
                <img src="/img/VivaGroup.svg" alt="Viva Group" />
              </div>
            </div>
            <img src="/img/VivaWood.png" className='w-full h-full object-cover' alt="Viva Wood" />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className='w-full h-[732px] relative'>
            <div className='absolute w-full h-full flex  xl:flex-row flex-col-reverse justify-end xl:justify-between items-center xl:px-20 top-0 left-0 right-0 bottom-0'>
              <div>
                <p className={`xl:text-[56px] text-[26px] font-qilona mt-3 xl:mt-0 text-white transition-all duration-1500 ease-in-out ${getAnimationClasses(2, 'title')}`}>
                  Legacy
                </p>
                <p className={`xl:text-[96px] text-[56px] font-qilona text-white xl:-mt-10 -mt-4 font-normal transition-all duration-1500 ease-in-out transform ${getAnimationClasses(2, 'subtitle')}`}>
                  Luxicore
                </p>
                <p
                  className={`xl:text-[56px] text-[26px] font-qilona font-normal xl:-mt-14 -mt-8 ml-[200px] text-white transition-all duration-1500 ease-in-out ${getAnimationClasses(2, 'title')}`}> 
                  Series
                </p>

                <Link to="/collection/luxicore">
                  <div  onClick={()=>handleClick()} className={`w-[139px] h-[40px] rounded-[6px] mt-4 xl:mt-0 bg-white flex justify-center items-center gap-x-2 transition-all duration-1500 ease-in-out transform ${getAnimationClasses(2, 'button')}`}>
                    <p className='font-semibold text-[16px] font-workSans text-[#101010]'>Explore</p>
                    <MoveRight />
                  </div>
                </Link>

                <div className='absolute bottom-0 xl:flex hidden progressBar'>
                  {/* <div className='w-[82px] h-[6px] rounded-[10px] bg-white absolute'></div>
                  <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99]'></div> */}
                  <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona text-[76px] outlined-text'>3</p>
                    <p className='text-[46px] font-qilona text-white font-normal mt-4'>of 3</p>
                  </div>
                </div>
                <div className='absolute bottom-0 right-[24px] flex xl:hidden  progressBar'>
                  {/* <div className='w-[62px] h-[6px] rounded-[10px] bg-white absolute'></div>
                  <div className='w-[138px] h-[6px] rounded-[10px] bg-[#ACACAC99]'></div> */}
                  <div className='flex gap-x-5 items-center'>
                    <p className='font-qilona md:text-[76px] text-[46px] outlined-text'>3</p>
                    <p className='md:text-[46px] text-[36px] font-qilona text-white font-normal mt-4'>of 3</p>
                  </div>
                </div>
              </div>

              <div
                className={`2xl:w-[613px] xl:w-[500px] w-[90vw] h-[323px] xl:h-full xl:mt-0 mt-20 flex xl:items-center transition-all duration-1500 ease-in-out ${getAnimationClasses(2, 'image')}`}
              >
                <img src="/img/LuxicoreGroup.svg" alt="Luxicore Group" />
              </div>
            </div>
            <img src="/img/Luxicore.png" className='w-full h-full' alt="Luxicore" />
          </div>
        </SwiperSlide>

        <div className="autoplay-progress  absolute xl:left-[80px] right-[20px] bottom-[120px]  xl:bottom-[130px] " slot="container-end"  > 
           <div className="progress-bar" ref={progressLine}></div>
        </div>
          
      </Swiper>
    </div>
  );
};

export default Hero;






