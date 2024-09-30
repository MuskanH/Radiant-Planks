import React from 'react'
import Hero from '../HeroSection/Hero'
import SPC from '../SPC/SPC'
import OurProducts from '../OurProducts/OurProducts'
import WhySPC from '../SPC/WhySPC'
import Applications from '../Applications/Applications'
import Sustainable from '../Sustainable/Sustainable'
import Inquire from '../Inquire/Inquire'

const Home = () => {
  return (
    <div className='bg-[#F4F4F4] '>
      <Hero/>
      <SPC/>
      <OurProducts/>
      <Inquire/>
      <WhySPC/>
      <Applications/>
      <Sustainable/>
    </div>
  )
}

export default Home
