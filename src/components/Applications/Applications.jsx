import React from 'react'

const Applications = () => {
  return (
    <div className='w-full bg-white mt-3 pb-10 md:pb-20 font-workSans flex flex-col items-center '>
        <p className='text-[40px] font-normal text-black pt-6'><b className='text-[40px] font-semibold text-black '>APPLICATIONS</b></p>
        <img src="/img/arrowDesign.png"/>
       
      <div className='xl:w-[75%] md:w-[90%] h-[600px] md:block hidden relative mt-10 '>

        <div className='w-full h-full absolute flex justify-center items-center '>
          <div className=' w-[300px] h-[300px] z-50 relative rounded-full border-[8px] border-white '>
           <div className='absolute bottom-4 left-[90px] flex justify-center items-end '>
             <p className=' text-[40px] font-qilona text-white '>Office</p>
           </div>
          
           <img src="/img/Office.jpg" alt="Office" className='w-full h-full rounded-full object-cover' />
          </div>
        </div>


        <div className='w-full h-[50%] flex gap-x-5 '>
           <div className='w-[50%] h-[100%] border-[8px] shadow-2xl relative border-white rounded-[10px] '>
              <p className='absolute bottom-2 left-5 xl:text-[40px] text-[24px] font-qilona text-white '>Living room</p>
              <img src="/img/Living.jpg" alt="Living Room" className='w-full h-full  object-cover ' />
           </div>

           <div className='w-[50%] h-[100%] border-[8px] shadow-2xl relative border-white rounded-[10px] '>
           <p className='absolute bottom-2 right-5 xl:text-[40px] text-[24px] font-qilona text-white '>Bathroom</p>
              <img src="/img/Bathroom.jpg" alt="Bathroom" className='w-full h-full  object-cover ' />
           </div>

        </div>

        <div className='w-full h-[50%] flex gap-x-5 mt-5 '>
           <div className='w-[50%] h-[100%] border-[8px] shadow-2xl relative border-white rounded-[10px] '>
              <p className='absolute bottom-2 left-5 xl:text-[40px] text-[24px] font-qilona text-white '>Kitchen</p>
              <img src="/img/Kitchen.jpg" alt="Kitchen" className='w-full h-full  object-cover ' />
           </div>

           <div className='w-[50%] h-[100%] border-[8px] shadow-2xl relative border-white rounded-[10px] '>
           <p className='absolute bottom-2 right-5 xl:text-[40px] text-[24px] font-qilona text-white '>Bedroom</p>
              <img src="/img/Bedroom.jpg" alt="Bedroom" className='w-full h-full  object-cover ' />
           </div>

        </div>
      </div>

      <div className='md:hidden flex flex-col gap-y-5 '>
        <div className='relative flex justify-center '>
        <p className='font-qilona text-[40px] text-white absolute bottom-4  '>Office</p>
        <img src="/img/Office.jpg" alt='Office' className='w-[90vw] h-[250px] mt-10 '/>
        </div>
        <div className='relative flex justify-center '>
        <p className='font-qilona text-[40px] text-white absolute bottom-4  '>Kitchen</p>
        <img src="/img/Kitchen.jpg" alt='Kitchen' className='w-[90vw] h-[250px] '/>
        </div>
        <div className='relative flex justify-center '>
        <p className='font-qilona text-[40px] text-white absolute bottom-4  '>Living room</p>
        <img src="/img/Living.jpg" alt='Living room' className='w-[90vw] h-[250px] '/>
        </div>
        <div className='relative flex justify-center '>
        <p className='font-qilona text-[40px] text-white absolute bottom-4  '>Bedroom</p>
        <img src="/img/Bedroom.jpg" alt='Bedroom' className='w-[90vw] h-[250px] '/>
        </div>
        <div className='relative flex justify-center '>
        <p className='font-qilona text-[40px] text-white absolute bottom-4  '>Bathroom</p>
        <img src="/img/Bathroom.jpg" alt='Bathroom' className='w-[90vw] h-[250px] '/>
        </div>
        

      </div>
    </div>
  )
}

export default Applications
