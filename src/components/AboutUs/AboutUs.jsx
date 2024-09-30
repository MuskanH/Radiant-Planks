import React from 'react'
import Inquire from '../Inquire/Inquire'

const AboutUs = () => {
  return (
    <div className='w-full bg-white mt-3 font-workSans flex flex-col  '>
        <p className='text-[40px] font-normal text-center text-black pt-6'><b className='text-[40px] font-semibold text-black '>OUR</b> HISTORY</p>
       <div className='flex justify-center '>
       <img src="/img/arrowDesign.png"/>
       </div>
        

        <div className='flex flex-col xl:w-[80vw]  mx-auto ' >
          <div className='w-full flex xl:flex-row flex-col gap-y-10 gap-x-40 xl:mt-20 mt-10 '>
          <p className='xl:w-[50%] w-[90vw] font-normal text-[18px] font-poppins text-[#5F5F5F] '>
              "<b className='font-semibold text-[48px] '>F</b>ounded on the principles of experience, innovation, and unwavering commitment, 
              Tileque Surfaces LLP has been a stalwart in the flooring industry for over three decades. Strategically positioned within a 2-hour radius, 
              less than 150KM from Mundra Port, our journey commenced with a visionary goal to redefine the benchmarks of quality and sustainability in flooring. <br></br><br></br>At the heart of our operations lies a production capacity that exceeds 30 million square feet, a testament to our dedication to meeting the demands of our clients efficiently. What sets us apart is our pioneering spirit – we proudly introduced EIR (Emboss in Register) technology to India, not merely as a means to enhance production, but as a bold stride into the future of flooring aesthetics. Our sprawling 100,000 sq feet floor plan, orchestrated by a dedicated team of over 50 skilled professionals, exemplifies our commitment to innovation and excellence at Tileque Surfaces LLP."
           </p>

            <img src="/img/EcoCrafted.jpg" className='xl:w-[40%] w-[90vw] h-[350px] md:h-[500px] border-[5px] border-white rounded-[20px] shadow-2xl object-cover ' />
          </div>

          <p className='xl:w-full w-[90vw] xl:mt-20 mt-10 mx-auto font-normal text-[18px]  font-poppins text-[#5F5F5F] '>Tileque Surfaces LLP, the visionary force behind Plankton Floors, was founded by the three stalwarts of the flooring industry - Mr. Bharatbhai Patel, Mr. Keshavbhai Patel, and Mr. Laljibhai Patel. Their collaboration was not just about business but a shared vision to redefine quality and craftsmanship. <br></br> <br></br>The journey began with a visionary idea - to deliver exceptional products while creating a sustainable business model.</p>
        </div>

        <div className='flex flex-col items-center xl:my-20 my-14 '>
        <p className='text-[40px] font-normal text-black pt-6'><b className='text-[40px] font-semibold text-black '>OUR</b> MISSION</p>
        <img src="/img/arrowDesign.png"/>

        <p className='xl:w-[80vw] w-[90vw] font-normal text-[18px] font-poppins text-[#5F5F5F] mt-10 '>"Our mission is to lead the flooring industry by providing unparalleled products. Through innovative technologies, automated processes, and a commitment to quality at every checkpoint, we aim to enrich lives, foster lasting relationships, and contribute to a sustainable future.<br></br><br></br>Our mission is not solely about turnover and customers; it's about enriching lives, ensuring ethical business practices, and leaving a positive imprint.<br></br><br></br>We aren't just producing floors; we're crafting narratives of trust and quality. With cutting-edge technology and a human touch, our mission is to enrich lives and spaces. Plankton Floors is our pledge—a promise to elevate surroundings, uplift lives, and set new standards in the industry</p>
        <p className='xl:w-[80vw] w-[90vw] font-semibold text-[22px] font-poppins text-[#F29622] mt-10 '>"Success in business requires training and discipline and hard work. But if you're not frightened by these things, the opportunities are just as great today as they ever were" - and we at Plnkton Floors resonate with this etho”</p>
        </div>

        <div className='flex flex-col items-center mb-20'>
        <p className='text-[40px] font-normal text-black pt-6'><b className='text-[40px] font-semibold text-black '>OUR</b> VISION</p>
        <img src="/img/arrowDesign.png"/>

        <p className='xl:w-[80vw] w-[90vw] font-normal text-[18px] font-poppins text-[#5F5F5F] mt-10 '>
        "At Tileque Surfaces LLP, we envision Plankton Floors as not just a flooring solution but a statement of quality and innovation. We strive to set new benchmarks by marrying cutting-edge technology with a relentless commitment to excellence.<br></br><br></br>"At Tileque Surfaces LLP, our vision extends beyond the conventional norms of business. We aspire to be more than just a flooring solution provider; we aim to elevate the quality of life for our workers and contribute to a greener, sustainable future. With a strong commitment to safety, we produce SPC floors, focusing on accident prevention and fostering a work environment that values the well-being of our team.<br></br><br></br>Our vision is a beacon, guiding us to create not just flooring but narratives of quality, sustainability, and lasting impressions.
        </p>
        <p className='xl:w-[80vw] w-[90vw] font-semibold text-[22px] font-poppins text-[#F29622] mt-10 '>
        “Every plank tells a story, and at Plankton Floors, we are the storytellers of elegance and excellence”
        </p>
        </div>
        

        <Inquire/>
      
    </div>
  )
}

export default AboutUs
