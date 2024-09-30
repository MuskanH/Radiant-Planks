import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const handleClick = () => {
      window.scrollTo(0, 0);
    };
  return (
    <div className='bg-[#F4F4F4] w-full h-full font-workSans '>
        <div className='w-full xl:h-[356px] h-fit py-10 xl:pt-10 mt-3 bg-black '>
          <div className='flex flex-row flex-wrap md:px-20 px-8 gap-10 xl:justify-between  '> 
            <div className='flex flex-col gap-y-4 '>
                <p className='text-white font-semibold text-[22px]'>Products</p>
              <Link to="/collection/eco"> <li onClick={()=>handleClick()} className='text-white  font-normal text-[18px] '>Eco Crafted Elegance Series</li> </Link> 
              <Link to="/collection/luxicore"> <li onClick={()=>handleClick()}className='text-white  font-normal text-[18px] '>Luxicore Legacy Series</li></Link>
              <Link to="/collection/viva"> <li onClick={()=>handleClick()} className='text-white  font-normal text-[18px] '>Viva Wood Series</li></Link>
            </div>

            <div className='flex flex-col gap-y-4 '>
                <p className='text-white font-semibold text-[22px]'>Resources</p>
                <li className='text-white  font-normal text-[18px] '>Catalogue</li>     
            </div>

            <div className='flex flex-col gap-y-4 '>
                <p className='text-white font-semibold text-[22px]'>Address</p>
               <div className='flex gap-x-3 items-start'>
               <img src="/img/Location.svg" className='mt-1.5 '/>
               <address className='text-white not-italic font-normal text-[18px] '>1435, 51st Street, Building #5,<br></br> Second Floor, North Bergen, <br></br>NJ 07047</address>     
               </div>
               
            </div>

            <div className='flex flex-col gap-y-4 '>
                <p className='text-white font-semibold text-[22px]'>Contacts</p>
               <div className='flex gap-x-3 items-center'>
               <img src="/img/Mail2.svg"/>
               <a href='mailto:jakob.garcia@gmail.com' className='text-white  font-normal text-[18px] '>jakob.garcia@gmail.com</a>     
               </div>

               <div className='flex gap-x-3 items-center'>
               <img src="/img/Calling.svg"/>
               <a href='tel:(846) 435-7173' className='text-white  font-normal text-[18px] '>(846) 435-7173</a>     
               </div>
               
            </div>
          </div>

          <div className='flex justify-end items-center gap-x-10  md:px-20 px-8 mt-14 '>
            <img src="/img/makeInIndia.svg"/>
            <img src="/img/ISO.svg"/>
            <img src="/img/CE.svg"/>
          </div>
        </div>

 

      <div className="bg-white w-full h-[80px] hidden md:flex justify-between items-center px-10">
        <p className="font-bold text-[16px]  ">
          &#169;{currentYear} ALL RIGHTS RESERVED by <b>RADIANT PLANKS</b>
        </p>
        <p className="font-bold text-[16px] ">
          Design & Developed by{" "}
          <a href="https://pruthatek.com" className="text-[#F29622] underline">
            PRUTHATEK
          </a>
        </p>
        <div className="flex gap-x-5">
          <div className="w-[50px] h-[50px] rounded-full group hover:bg-[#F29622]  hover:rotate-180 transition-all duration-500 bg-black flex justify-center items-center ">
            <a href="" target="_blank">
              <InstagramIcon className="text-white" />
            </a>
          </div>
          <div className="w-[50px] h-[50px] rounded-full group hover:bg-[#F29622]  hover:rotate-180 transition-all duration-500 bg-black flex justify-center items-center ">
            <a href="" target="_blank">
              <FacebookOutlinedIcon className="text-white" />
            </a>
          </div>
          <div className="w-[50px] h-[50px] rounded-full group hover:bg-[#F29622]  hover:rotate-180 transition-all duration-500 bg-black flex justify-center items-center ">
            <GoogleIcon className="text-white" />
          </div>
          <div className="w-[50px] h-[50px] rounded-full group hover:bg-[#F29622]  hover:rotate-180 transition-all duration-500 bg-black flex justify-center items-center ">
            <img src="/img/TwitterX.svg" className="h-[24px] w-[24px] " />
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col w-full h-fit py-10 gap-y-5 justify-center items-center">
       
        <p className="font-bold text-[12px]  ">
          &#169;{currentYear} ALL RIGHTS RESERVED by <b>RADIANT PLANKS</b>
        </p>
        <p className="font-bold text-[12px] ">
          Design & Developed by{" "}
          <a href="https://pruthatek.com" className="text-[#F29622] underline">
            PRUTHATEK
          </a>
        </p>

     <div className='flex gap-x-5 mt-3'>

    
        <div className="w-[50px] h-[50px] rounded-full group hover:bg-[#F29622]  hover:rotate-180 transition-all duration-500 bg-black flex justify-center items-center ">
          <a href="" target="_blank">
            <InstagramIcon className="text-white" />
          </a>
        </div>
        <div className="w-[50px] h-[50px] rounded-full group hover:bg-[#F29622]  hover:rotate-180 transition-all duration-500 bg-black flex justify-center items-center ">
          <a href="" target="_blank">
            <FacebookOutlinedIcon className="text-white" />
          </a>
        </div>
        <div className="w-[50px] h-[50px] rounded-full group hover:bg-[#F29622]  hover:rotate-180 transition-all duration-500 bg-black flex justify-center items-center ">
          <GoogleIcon className="text-white" />
        </div>
        <div className="w-[50px] h-[50px] rounded-full group hover:bg-[#F29622]  hover:rotate-180 transition-all duration-500 bg-black flex justify-center items-center ">
          <img src="/img/TwitterX.svg" className="h-[24px] w-[24px] " />
        </div>
    </div>

      </div>
      
    </div>
  )
}

export default Footer
