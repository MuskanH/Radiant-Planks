import React from 'react'

const WhySPC = () => {
  return (
    <div className='w-full bg-white mt-3 pb-10 md:pb-20 font-workSans flex flex-col items-center '>
        <p className='text-[40px] font-normal text-black pt-6'><b className='text-[40px] font-semibold text-black '>WHY</b> SPC?</p>
        <img src="/img/arrowDesign.png"/>
       
       <div className='xl:w-[85%] w-[90%] xl:h-[490px] h-fit flex xl:flex-row flex-col xl:justify-between border-[7px] mt-5 border-white bg-[#AAAAAA4D] shadow-2xl '>
          <div className='xl:pl-10 px-4  py-10 flex flex-col gap-y-4 '>
             <div className='flex gap-x-5 '>
                <div className='w-[33px] h-[33px] flex-shrink-0 border-[2px] border-white rounded-full bg-[#F29622] flex justify-center items-center ' >
                   <p className='font-semibold text-[18px] text-white '>1</p>
                </div>
                <div>
                 <p className='font-montserrat text-[20px] font-bold text-black '>Finish UV Coating</p>
                 <p className='font-medium text-[16px] text-black '>This top/surface layer of an SPC floor is designed to prevent discolouration, micro
                 scratches and UV radiation.</p>
                </div>
             </div>

             <div className='flex gap-x-5 '>
                <div className='w-[33px] h-[33px] flex-shrink-0 border-[2px] border-white rounded-full bg-[#F29622] flex justify-center items-center ' >
                   <p className='font-semibold text-[18px] text-white '>2</p>
                </div>
                <div>
                 <p className='font-montserrat text-[20px] font-bold text-black '>Wear Layer</p>
                 <p className='font-medium text-[16px] text-black '>It provides resistance to scratches and stains and easy to keep clean.</p>
                </div>
             </div>

             <div className='flex gap-x-5 '>
                <div className='w-[33px] h-[33px] flex-shrink-0 border-[2px] border-white rounded-full bg-[#F29622] flex justify-center items-center ' >
                   <p className='font-semibold text-[18px] text-white '>3</p>
                </div>
                <div>
                 <p className='font-montserrat text-[20px] font-bold text-black '>HD Wooden Decor Film</p>
                 <p className='font-medium text-[16px] text-black '>Regardless of natural wood or stone structure, Plankton SPC offers a verity of beautiful designs. That will better Showcase your individual style.</p>
                </div>
             </div>

             <div className='flex gap-x-5 '>
                <div className='w-[33px] h-[33px] flex-shrink-0 border-[2px] border-white rounded-full bg-[#F29622] flex justify-center items-center ' >
                   <p className='font-semibold text-[18px] text-white '>4</p>
                </div>
                <div>
                 <p className='font-montserrat text-[20px] font-bold text-black '>Solid Polymer Core board</p>
                 <p className='font-medium text-[16px] text-black '>This core is made from a combination of natural limestone powder and stabilizers,
                 ensuring a stable and waterproof performance for the floor.</p>
                </div>
             </div>

             <div className='flex gap-x-5 '>
                <div className='w-[33px] h-[33px] flex-shrink-0 border-[2px] border-white rounded-full bg-[#F29622] flex justify-center items-center ' >
                   <p className='font-semibold text-[18px] text-white '>5</p>
                </div>
                <div>
                 <p className='font-montserrat text-[20px] font-bold text-black '>IXPE Padding</p>
                 <p className='font-medium text-[16px] text-black '>Better sound absorption and excellent underfoot feeling.</p>
                </div>
             </div>
          </div>

         <div className='xl:w-[410px] w-full flex justify-end '>
          <img src="/img/Layers.png" className='md:w-[430px] w-full h-full   '/>
         </div>
          
       
       </div>
      
    </div>
  )
}

export default WhySPC
