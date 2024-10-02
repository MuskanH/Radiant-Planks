import React, {useState, useEffect} from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Inquire from '../Inquire/Inquire';
import { ArrowDown, ChevronDown } from 'lucide-react';

const ProductsPage = ({active,setActive}) => {
  const { collectionName } = useParams(); // Get the dynamic route parameter

  // Content for each collection
  const collectionData = {
    eco: [
      {
        id: 1,
        name: "Woodland Symphony",
        img: "/img/woodland.svg"
      },
      {
        id: 2,
        name: "Classic Scarborough",
        img: "/img/scarborough.svg"
      },
      {
        id: 3,
        name: "Jeffersonian Oak",
        img: "/img/jeffer.svg"
      },
      {
        id: 4,
        name: "Ethereal Horizon",
        img: "/img/ethereal.svg"
      },
      {
        id: 5,
        name: "Aurora Craft",
        img: "/img/aurora.svg"
      },
      {
        id: 6,
        name: "LegacyWood OilGlow",
        img: "/img/legacy.svg"
      },
      {
        id: 7,
        name: "Enigma Woodcraft",
        img: "/img/enigma.svg"
      },
      {
        id: 8,
        name: "Granite Majesty",
        img: "/img/granite.svg"
      },
      {
        id: 9,
        name: "Heritage Oak",
        img: "/img/heritage.svg"
      },
      {
        id: 10,
        name: "Obsidian Noir Elegance",
        img: "/img/obsidian.svg"
      },
      {
        id: 11,
        name: "Planktonic Resilience oak",
        img: "/img/planktop.svg"
      },
      {
        id: 12,
        name: "Route-66 Odyssey",
        img: "/img/route66.svg"
      },
      {
        id: 13,
        name: "Sankofa Wood Craft",
        img: "/img/sankofa.svg"
      },
      {
        id: 14,
        name: "Patriot Memorial Silver",
        img: "/img/patriot.svg"
      }
    ],
    viva: [ 
        {
        id: 15,
        name: "Appalachian Heritage",
        img: "/img/appalachian.jpg"
        },
        {
          id: 16,
          name: "Whispering Zephyr",
          img: "/img/whispering.jpg"
        }
    ],
    luxicore: [ 
        {
        id: 17,
        name: "Marine Slate Planks",
        img: "/img/marine.jpg"
      },
      {
        id: 18,
        name: "Subaqueous Onyx",
        img: "/img/subaqueous.jpg"
      },
      {
        id: 19,
        name: "Coastal Elegance",
        img: "/img/coastal.jpg"
      },
      {
        id: 20,
        name: "Atlantic Shadowwood",
        img: "/img/atlantic.jpg"
      },
      // {
      //   id: 21,
      //   name: "Golden Harvest Oak",
      //   img: "/img/golden.jpg"
      // },
      {
        id: 22,
        name: "Italiano Festa Wood",
        img: "/img/italiano.jpg"
      },
      {
        id: 23,
        name: "Golden Sequio Glow",
        img: "/img/sequio.jpg"
      },
      {
        id: 24,
        name: "Swiftstyle Oak",
        img: "/img/swift.jpg"
      },
    ],
  };

  const collection = collectionData[collectionName]; // Access collection by name
  const getCollectionHeading = () => {
    switch (collectionName) {
      case 'eco':
        return 'Eco Crafted Elegance Series';
      case 'viva':
        return 'Viva Wood Series';
      case 'luxicore':
        return 'Luxicore Legacy Series';
      default:
        return 'Unknown Collection';
    }
  };

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  const [openCollection, setOpenCollection] = useState(false)

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
    <div className="collection-page mt-3  bg-white ">

      <div className='w-full md:h-[290px] h-[200px] mb-14 relative '>
         <div className='absolute w-full h-full bg-black/60 flex justify-center items-center '>
            <p className='font-qilona xl:text-[90px] text-[40px] text-white/80 '>{collectionName === "eco" && "Eco Elegance Series"}</p>
            <p className='font-qilona xl:text-[90px] text-[40px] text-white/80 '>{collectionName === "luxicore" && "Luxicore Legacy Series"}</p>
            <p className='font-qilona xl:text-[90px] text-[40px] text-white/80 '>{collectionName === "viva" && "Viva Wood Series"}</p>
         </div>
         {collectionName === "eco" && <img src="/img/EcoCrafted.jpg" alt='Eco Elegance Series' className='w-full h-full object-cover'/>}
         {collectionName === "luxicore" && <img src="/img/Luxicore.jpg" alt='Luxicore Legacy Series' className='w-full h-full object-cover'/>}
         {collectionName === "viva" && <img src="/img/VivaWood.jpg" alt='Viva Wood Series' className='w-full h-full object-cover'/>}
      </div>
      
     <div className='w-full flex xl:flex-row flex-col gap-x-10 xl:px-14 mb-20 '>

       <div className='xl:block hidden '>
         <div className='w-[283px] h-[53px] rounded-[6px] bg-black flex justify-center items-center '>
            <p className='text-white font-medium text-[24px] font-workSans '>Our Products</p>
         </div>

         <Link to="/collection/eco" >
         <div className={`relative w-[283px] cursor-pointer mt-3  h-[187px]  `}>
         <div className='absolute top-4 left-4 '>
              <p className='font-qilona text-[20px] text-white  md:leading-[24px]'>Eco <br></br><b className='font-normal text-[26px]'>Elegance</b></p>
              <p className='font-qilona text-[20px] pl-14 text-white absolute md:leading-[24px]'>Series</p>
            </div>
            
           <img src="/img/EcoCrafted.jpg" alt='Eco Elegance Series' className={`w-full h-full rounded-[6px] border-[3px] ${collectionName === "eco" ? "border-[#F29622]" : "border-transparent"}`}/>
         </div>
         </Link>

         <Link to="/collection/luxicore" >
         <div className={`relative w-[283px] cursor-pointer mt-3  h-[187px]   `}>
         <div className='absolute bottom-10 left-4 '>
              <p className='font-qilona text-[20px] text-white  md:leading-[24px]'>Luxicore <br></br><b className='font-normal text-[26px]'>Legacy</b></p>
              <p className='font-qilona text-[20px] pl-14 text-white absolute md:leading-[24px]'>Series</p>
            </div>
            
           <img src="/img/Luxicore.jpg" alt='Luxicore Legacy Series' className={`w-full h-full rounded-[6px] border-[3px] ${collectionName === "luxicore" ? "border-[#F29622]" : "border-transparent"}`}/>
         </div>
         </Link>

         <Link to="/collection/viva" >
         <div className={`relative w-[283px] cursor-pointer mt-3  h-[187px]   `}>
         <div className='absolute bottom-10 left-4 '>
              <p className='font-qilona text-[20px] text-white  md:leading-[24px]'>Viva <br></br><b className='font-normal text-[26px]'>Wood</b></p>
              <p className='font-qilona text-[20px] pl-14 text-white absolute md:leading-[24px]'>Series</p>
            </div>
            
           <img src="/img/VivaWood.jpg" alt='Viva Wood Series' className={`w-full h-full rounded-[6px] border-[3px] ${collectionName === "viva" ? "border-[#F29622]" : "border-transparent"} `}/>
         </div>
         </Link>

       </div>

      <div className='relative '>

      
       <div onClick={()=>setOpenCollection(!openCollection)} className='w-[85vw] md:w-[50vw] cursor-pointer mx-auto px-8 flex justify-between items-center xl:hidden mb-10 bg-black h-[50px] rounded-[6px] '>
         <p className='text-white font-medium text-[24px] font-workSans '>Our Products</p>
         <ChevronDown color='white'/>
       </div>

       {openCollection && 
               
              <div className=' flex flex-col items-center mx-auto  '>
                <div className='w-[85vw] md:w-[50vw] h-[155px] absolute top-14 rounded-[6px] bg-white  z-50  '>

                  <Link to="/collection/eco" onClick={() => {setActive("Eco"); setOpenCollection(!openCollection); setOpenNav(false);}} className={`w-full h-[41px]  flex items-center ${active === "Eco" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Eco" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Eco Crafted Elegance Series</p>
                  </Link>

                  <Link to="/collection/luxicore" onClick={() => {setActive("Luxicore"); setOpenCollection(!openCollection); setOpenNav(false);}} className={`w-full h-[41px]  flex items-center ${active === "Luxicore" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Luxicore" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Luxicore Legacy Series</p>
                  </Link>

                  <Link to="/collection/viva" onClick={() => {setActive("Viva"); setOpenCollection(!openCollection); setOpenNav(false);}} className={`w-full h-[41px]  flex items-center ${active === "Viva" ? "bg-[#F2962233] border-l-[#F29622]" : "border-l-transparent "} border-l-[4px] mt-2  `}>
                    <p className={` ${active === "Viva" ? "text-[#F29622] font-semibold" : "text-[#5F5F5F] font-normal "}  text-[18px]  pl-2 `} >Viva Wood Series</p>
                  </Link>
               </div>
              </div> }


      </div>
       <div className='xl:block hidden '>
         <img src="/img/Line.svg"/>
       </div>

       <div className='flex flex-col w-full items-center'>
       {collection ? (
        <>
          {/* <p className='text-[40px]  text-black pt-6'>
            <b className='text-[40px] uppercase font-semibold text-black '>{getCollectionHeading()}</b> </p>
          <img src="/img/arrowDesign.png"/> */}
          <div className="product-list flex flex-row flex-wrap justify-center gap-5 ">
            {collection.map(product => (
              <Link to={`/product/${collectionName}/${product.id}`} key={product.id}>
                <div onClick={() => handleLinkClick()} className='md:w-[303px] w-[85vw] md:h-[330px] h-[350px] group rounded-[7px]  py-2 flex flex-col items-center transition-all duration-500 bg-white hover:bg-[#F29622] shadow-xl '>
              
                <div className='md:w-[290px] w-[80vw] h-[273px] overflow-hidden rounded-[4px] '>
                  <img src={product.img} alt={product.name} className='w-full h-full group-hover:scale-110 transition-all duration-500 rounded-[4px] object-cover ' />
                </div>
               
              
                <p className='text-[22px] font-medium font-workSans text-[#101010] group-hover:text-white md:mt-2 mt-4 transition-all duration-500 '>{product.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <p>Collection not found.</p>
      )}
        
         
       </div>
     </div>

   
    <Inquire/>

    </div>
  );
};

export default ProductsPage;
