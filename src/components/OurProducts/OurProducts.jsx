import React from 'react'
import { Link } from 'react-router-dom'
import Inquire from '../Inquire/Inquire';

const OurProducts = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <div className='w-full bg-white mt-3 pb-10 md:pb-20 font-workSans flex flex-col items-center '>
          <p className='text-[40px] font-normal text-black pt-6'><b className='text-[40px] font-semibold text-black '>OUR</b> Products</p>
          <img src="/img/arrowDesign.png"/>

    <div className='flex md:flex-row flex-col  gap-4 xl:w-[85%] w-[90%] h-fit md:h-[626px] mt-10 '>
        <div className='md:w-[50%] w-full md:h-full h-[250px] relative group '>
            <div className='absolute  left-10 top-4  md:top-14  '>
            <p className='md:text-[30px] text-[24px] font-qilona text-white leading-[34px] md:leading-[50px]'>Eco <br></br> <b className='md:text-[60px] text-[40px] font-qilona text-white font-normal '>Elegance</b>  </p>
            <p className='md:text-[30px] text-[24px] font-qilona font-normal text-white md:-mt-4 -mt-2 text-end '>Series</p>
            </div>

            <div className='absolute w-full h-full flex justify-center items-center text-white text-[30px] opacity-0 transition-all duration-1000 ease-in-out transform  group-hover:opacity-100 '>
               <Link to="/collection/eco" >
                <div onClick={()=>handleLinkClick()}>
                 <button  className='w-[140px] h-[45px] text-[20px] shadow-xl hover:bg-black hover:text-white transition-all duration-1000 font-semibold rounded-full bg-white text-black '>View</button>
                 </div>
               </Link>
            </div>
            {/* <img src="/img/Radiant.png" className='absolute right-64 top-40 '/> */}
            
           <img src="/img/EcoCrafted.jpg" alt='Eco Elegance Series' className='w-full h-full object-cover '/>
        </div>

        <div className='md:w-[50%] w-full h-full flex flex-col gap-y-4 '>
        <div className='w-[100%] md:h-[48.5%] h-[250px] relative group '>
            <div className='absolute  left-6 bottom-4   '>
            <p className='md:text-[30px] text-[24px] font-qilona text-white  leading-[34px] md:leading-[50px]'>Luxicore <br></br> <b className='text-[40px] md:text-[60px] font-qilona text-white font-normal '>Legacy</b>  </p>
            <p className='md:text-[30px] text-[24px] font-qilona font-normal text-white xl:-mt-4 lg:-mt-2 -mt-2 text-end '>Series</p>
            </div>

            <div className='absolute w-full h-full flex justify-center items-center text-white text-[30px] opacity-0 transition-all duration-1000 ease-in-out transform  group-hover:opacity-100 '>
               <Link to="/collection/luxicore">
               <div onClick={()=>handleLinkClick()}>
                 <button className='w-[140px] h-[45px] text-[20px] shadow-xl hover:bg-black hover:text-white transition-all duration-1000 font-semibold rounded-full bg-white text-black '>View</button>
               </div>
               </Link>
            </div>
            {/* <img src="/img/Radiant.png" className='absolute right-64 top-40 '/> */}
            
           <img src="/img/Luxicore.jpg" alt="Luxicore Legacy Series" className='w-full h-full object-cover'/>
        </div>

        <div className='w-[100%] md:h-[49%] h-[250px] relative group '>
            <div className='absolute  left-6 bottom-4   '>
            <p className='md:text-[30px] text-[24px] font-qilona text-white  leading-[34px] md:leading-[50px]'>Viva <br></br> <b className='text-[40px] md:text-[60px] font-qilona text-white font-normal '>Wood</b>  </p>
            <p className='md:text-[30px] text-[24px] font-qilona font-normal text-white md:-mt-4 -mt-3 text-end '>Series</p>
            </div>

            <div className='absolute w-full h-full flex justify-center items-center text-white text-[30px] opacity-0 transition-all duration-1000 ease-in-out transform  group-hover:opacity-100 '>
               <Link to="/collection/viva">
               <div onClick={()=>handleLinkClick()}>
                 <button className='w-[140px] h-[45px] text-[20px] shadow-xl hover:bg-black hover:text-white transition-all duration-1000 font-semibold rounded-full bg-white text-black '>View</button>
              </div>
               </Link>
            </div>
            
           <img src="/img/VivaWood.jpg" alt="Viva Wood Series" className='w-full h-full object-cover'/>
        </div>

        </div>


    </div>

    </div>
  )
}

export default OurProducts
