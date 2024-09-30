import React, {useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import Inquire from '../Inquire/Inquire';

const ProductsPage = () => {
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
        img: "/img/appalachian.svg"
        },
        {
          id: 16,
          name: "Whispering Zephyr",
          img: "whispering"
        }
    ],
    luxicore: [ 
        {
        id: 17,
        name: "Marine Slate Planks",
        img: "/img/marine.svg"
      },
      {
        id: 18,
        name: "Subaqueous Onyx",
        img: "/img/subaqueous.svg"
      },
      {
        id: 19,
        name: "Coastal Elegance",
        img: "/img/coastal.svg"
      },
      {
        id: 20,
        name: "Atlantic Shadowwood",
        img: "/img/atlantic.svg"
      },
      {
        id: 21,
        name: "Golden Harvest Oak",
        img: "/img/golden.svg"
      },
      {
        id: 22,
        name: "Italiano Festa Wood",
        img: "/img/italiano.svg"
      },
      {
        id: 23,
        name: "Golden Sequio Glow",
        img: "/img/sequio.svg"
      },
      {
        id: 24,
        name: "Swiftstyle Oak",
        img: "/img/swift.svg"
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

 

  const [zoom, setZoom] = useState(1); 

  const handleZoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); 
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1)); 
  };
  return (
    <div className="collection-page mt-3  bg-white ">

      <div className='w-full h-[290px] mb-14 relative '>
         <div className='absolute w-full h-full bg-black/60 flex justify-center items-center '>
            <p className='font-qilona text-[90px] text-white '>{collectionName === "eco" && "Eco Elegance Series"}</p>
            <p className='font-qilona text-[90px] text-white '>{collectionName === "luxicore" && "Luxicore Legacy Series"}</p>
            <p className='font-qilona text-[90px] text-white '>{collectionName === "viva" && "Viva Wood Series"}</p>
         </div>
         {collectionName === "eco" && <img src="/img/EcoCrafted.jpg" alt='Eco Elegance Series' className='w-full h-full object-cover'/>}
         {collectionName === "luxicore" && <img src="/img/Luxicore.jpg" alt='Luxicore Legacy Series' className='w-full h-full object-cover'/>}
         {collectionName === "viva" && <img src="/img/VivaWood.jpg" alt='Viva Wood Series' className='w-full h-full object-cover'/>}
      </div>
      
     <div className='w-full flex gap-x-10 px-14 mb-20 '>

       <div className=''>
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

       <div>
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
                <div onClick={() => handleLinkClick()} className='w-[303px] h-[330px] group rounded-[7px]  py-2 flex flex-col items-center transition-all duration-500 bg-white hover:bg-[#F29622] shadow-xl '>
              
                <div className='w-[290px] h-[273px] overflow-hidden rounded-[4px] '>
                  <img src={product.img} alt={product.name} className='w-full h-full group-hover:scale-110 transition-all duration-500 rounded-[4px] object-cover ' />
                </div>
               
              
                <p className='text-[22px] font-medium font-workSans text-[#101010] group-hover:text-white mt-2 transition-all duration-500 '>{product.name}</p>
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
