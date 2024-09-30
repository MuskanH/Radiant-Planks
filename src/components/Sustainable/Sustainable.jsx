import React from 'react'

const Sustainable = () => {
  return (
    <div className='w-full bg-white mt-3 pb-10 md:pb-14 font-workSans flex flex-col items-center '>
        <p className='text-[40px] font-normal text-black pt-6'><b className='text-[40px] font-semibold text-black '>SUSTAINABILITY</b></p>
        <img src="/img/arrowDesign.png"/>
      
      <div className='flex xl:flex-row flex-col gap-x-10 items-center justify-center px-10'>
        <img src="/img/sustainable.png"/>

        <div className='flex flex-col '>
           <div>
             <p className='text-[#00C758] font-montserrat font-bold text-[35px] '>RENEW</p>
             <p className='text-[#B0B2B1] font-semibold text-[20px] font-montserrat '>Carbon-Reducing Raw Materials</p>
             <p className='text-[#101010] font-medium mt-2 text-[18px] font-montserrat '>Most sustainable flooring with over 90% of key raw materials converted into carbon-reducing materials using recycled resources such as discarded cooking oil and used PET bottles.</p>
           </div>

           <div>
             <p className='text-[#00C758] font-montserrat font-bold text-[35px] '>REDUCE</p>
             <p className='text-[#B0B2B1] font-semibold text-[20px] font-montserrat '>Zero Waste</p>
             <p className='text-[#101010] font-medium mt-2 text-[18px] font-montserrat '>Minimises energy usage and waste in manufacturing. Minimises the use of resources for installation and maintenance with product innovation.</p>
           </div>

           <div>
             <p className='text-[#00C758] font-montserrat font-bold text-[35px] '>RECYCLE</p>
             <p className='text-[#B0B2B1] font-semibold text-[20px] font-montserrat '>100% Recyclable</p>
             <p className='text-[#101010] font-medium mt-2 text-[18px] font-montserrat '>Produces 100% easily recyclable floorings only.</p>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Sustainable
