import { Ellipsis, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({active, setActive}) => {

    const [openNav, setOpenNav] = useState(false)
    const [openCollection, setOpenCollection] = useState(false)
    const [selectedCollection, setSelectedCollection] = useState("")
    const location = useLocation();
    // const [active, setActive] = useState("");
    console.log(active)

    useEffect(() => {
      switch (location.pathname) {
        case "/":
          setActive("Home");
          break;
        case "/resources":
          setActive("Resources");
          break;
        case "/about":
          setActive("About Radiant Planks");
          break;
        case "/collection":
          setActive("Collection");
          break;
        case "/collection/eco":
          setActive("Eco");
          break;
        case "/collection/luxicore":
          setActive("Luxicore");
          break;
        case "/collection/viva":
          setActive("Viva");
          break;
        case "/contact":
          setActive("Contact Us");
          break;
        default:
          setActive("");
      }
    }, [location.pathname]);
  return (
    <>
    <nav className='w-full bg-white h-[100px] xl:flex hidden items-center justify-between 2xl:pl-[100px] 2xl:pr-[120px] xl:pl-[40px] xl:pr-[50px] 2xl:gap-x-14 xl:gap-x-10 font-workSans '>
       <Link to="/" className='Logo'>
          <img src="/img/Logo.png"/>
       </Link>

       <div className='Links flex  gap-x-10  '>
           <Link to="/">
             <div className='flex items-center'>
               <p className='link xl:text-[16px] 2xl:text-[18px] ' >Home</p>
             </div>
           </Link>

           <div className='relative'>
             <div onClick={()=>setOpenCollection(!openCollection)} className='flex items-center cursor-pointer gap-x-2'>
               <p className='link xl:text-[16px] 2xl:text-[18px] ' >Collection</p>
               <img src="/img/down.svg"/>
             </div>

             {openCollection && 
              <div className='absolute top-10 w-[304px] h-[155px] rounded-[6px] bg-white z-50 '>
                  <Link to="/collection/eco" onClick={()=>{setActive("Eco"); setOpenCollection(false)}} className={`w-full h-[41px]  flex items-center ${active === "Eco" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Eco" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Eco Crafted Elegance Series</p>
                  </Link>

                  <Link to="/collection/luxicore" onClick={()=>{setActive("Luxicore"); setOpenCollection(false)}} className={`w-full h-[41px]  flex items-center ${active === "Luxicore" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Luxicore" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Luxicore Legacy Series</p>
                  </Link>

                  <Link to="/collection/viva" onClick={()=>{setActive("Viva"); setOpenCollection(false)}} className={`w-full h-[41px]  flex items-center ${active === "Viva" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Viva" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Viva Wood Series</p>
                  </Link>

              </div> }
           </div>

           <Link to="/resources">
             <div className='flex items-center gap-x-2'>
               <p className='link xl:text-[16px] 2xl:text-[18px] ' >Resources</p>
               <img src="/img/down.svg"/>
             </div>
           </Link>

           <Link to="/about">
             <div className='flex items-center gap-x-2'>
               <p className='link xl:text-[16px] 2xl:text-[18px] ' >Why Radiant</p>
               <img src="/img/down.svg"/>
             </div>
           </Link>

           <Link to="/contact">
             <div className='flex items-center gap-x-2'>
               <p className='link xl:text-[16px] 2xl:text-[18px] ' >Contact Us</p>
             </div>
           </Link>
       </div>

       <div className='Inquiry flex cursor-pointer '>
         <div className='w-[195px] h-[40px] rounded-[6px] flex justify-center items-center gap-x-3 border-[2px] border-white shadow-2xl bg-gradient-to-tl from-[#FFBA63] via-[#F6A53F] to-[#F29622] '>
           <img src="/img/Mail.svg"/>
           <p className='font-semibold text-[16px] text-white '>Quick Inquiry</p>
         </div>
       </div>
    </nav>
{/* {Mobile Nav} */}
    <nav className='relative w-full h-fit  bg-white  xl:hidden  '>
          
          <div className='w-full py-5 flex justify-between items-center'>
          <Link to="/" >
          <div className='logo w-[190px] pl-5 '>
            <img src='/img/Logo.png' className='w-full'/>
           </div>
          </Link>
           <div className='pr-5'>
           {!openNav && <Ellipsis color='#25304C' onClick={()=>setOpenNav(!openNav)}/>} 
          
           </div>
 
          </div>
           
           {openNav && 
           <div className='absolute z-50 w-full top-0 left-0 flex flex-col gap-y-6 items-center justify-center bg-white backdrop-blur h-[100vh] py-10  '>
              <X color='#25304C' className='absolute top-10 right-10 ' onClick={()=>setOpenNav(!openNav)}/>
            <> 
           <Link to="/" onClick={()=>setOpenNav(false)}>
             <div className='flex items-center'>
               <p className='link text-[22px] ' >Home</p>
             </div>
           </Link>

           <div className='relative '>
             <div onClick={()=>setOpenCollection(!openCollection)} className='flex items-center cursor-pointer gap-x-2'>
               <p className='link text-[22px] ' >Collection</p>
               <img src="/img/down.svg"/>
             </div>
             {openCollection && 
              <div className='absolute top-10 w-[250px] h-[155px] rounded-[6px] bg-white z-50 '>
                  <Link to="/collection/eco" onClick={() => {setActive("Eco"); setOpenCollection(!openCollection); setOpenNav(false);}} className={`w-full h-[41px]  flex items-center ${active === "Eco" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Eco" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Eco Crafted Elegance Series</p>
                  </Link>

                  <Link to="/collection/luxicore" onClick={() => {setActive("Luxicore"); setOpenCollection(!openCollection); setOpenNav(false);}} className={`w-full h-[41px]  flex items-center ${active === "Luxicore" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Luxicore" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Luxicore Legacy Series</p>
                  </Link>

                  <Link to="/collection/viva" onClick={() => {setActive("Viva"); setOpenCollection(!openCollection); setOpenNav(false);}} className={`w-full h-[41px]  flex items-center ${active === "Viva" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Viva" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Viva Wood Series</p>
                  </Link>

              </div> }
           </div>

           <Link to="/resources" onClick={()=>setOpenNav(false)}>
             <div className='flex items-center gap-x-2'>
               <p className='link text-[22px] ' >Resources</p>
               <img src="/img/down.svg"/>
             </div>
           </Link>

           <Link to="/about" onClick={()=>setOpenNav(false)}>
             <div className='flex items-center gap-x-2'>
               <p className='link text-[22px] ' >Why Radiant</p>
               <img src="/img/down.svg"/>
             </div>
           </Link>

           <Link to="/contact" onClick={()=>setOpenNav(false)}>
             <div className='flex items-center gap-x-2'>
               <p className='link text-[22px] ' >Contact Us</p>
             </div>
           </Link>
            </> 
            <div className='w-[195px] h-[40px] rounded-[6px] flex justify-center items-center gap-x-3 border-[2px] border-white shadow-2xl bg-gradient-to-tl from-[#FFBA63] via-[#F6A53F] to-[#F29622] '>
              <img src="/img/Mail.svg"/>
              <p className='font-semibold text-[16px] text-white '>Quick Inquiry</p>
             </div>

           </div>}
 
    </nav>

    </>
  )
}

export default Navbar
