import React from 'react'

const Inquire = () => {
  return (
    <div className='w-full h-[630px] mt-3 relative '>
        {/* <div className='absolute top-10 left-60 '>
           <p className='font-normal text-[26px] font-montserrat text-white ' ><b className='font-extrabold ' >MAKE</b> YOUR PLACE MORE</p>
           <p className='font-qilona text-[76px] text-white pl-[200px] '>Elegant</p>
        </div> */}

       <div className='absolute flex justify-center xl:justify-end xl:pr-20 w-full h-full items-center  '>
        <div className=' w-[90%]  md:w-[461px] h-[535px] bg-white rounded-[20px]  '>
           <p className='font-workSans font-medium text-center pt-5 text-[26px] text-[#F29622] '><b className='font-workSans text-[26px] text-[#101010] '>Quick </b>Inquire</p>
           <form className='w-[90%] mx-auto mt-7 flex flex-col gap-y-5 '>
             <input placeholder='Enter Your Name' type='text' required className='w-full h-[45px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans px-4 bg-[#F4F5F5]  ' />
             <input placeholder='Company Name' type='text' required className='w-full h-[45px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans px-4 bg-[#F4F5F5]  ' />
             <input placeholder='Email' type='email' required className='w-full h-[45px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans px-4 bg-[#F4F5F5]  ' />
             <input placeholder='Phone' type='number' required className='w-full h-[45px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans px-4 bg-[#F4F5F5]  ' />
             <textarea placeholder='Inquiry' type='text' required className='w-full h-[101px] rounded-[10px] outline-none focus:outline-[#F29622] duration-500 transition-all placeholder:text-[#535353] placeholder:text-[13px] placeholder:font-workSans p-4 bg-[#F4F5F5]  ' />
          
             <button className='w-full h-[50px] rounded-[14px] mt-1 bg-[#F29622] text-white font-montserrat font-semibold text-[16px] ' >Submit</button>
           </form>
       
        </div>
    </div>
        <img src="/img/EcoCrafted.jpg" className='w-full h-full object-cover '/>
      
    </div>
  )
}

export default Inquire
