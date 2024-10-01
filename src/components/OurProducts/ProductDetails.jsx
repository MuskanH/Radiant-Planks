import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ZoomInOutlinedIcon from "@mui/icons-material/ZoomInOutlined";
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import Features from '../Features/Features';
import Inquire from '../Inquire/Inquire';

const ProductDetails = () => {
    const { id } = useParams();
    const {collectionName} = useParams();

    const collectionData = {
        eco: [
          {
            id: 1,
            name: "Woodland Symphony",
            img: "/img/woodland.svg",
            img2: "/img/woodland2.svg",
            img3: "/img/woodland3.svg",
            desc: "This design pays homage to the majestic Adirondack Mountains, where the whisper of the woodlands meets the allure of sophistication. Its unique grey wood finish embodies the timeless beauty of this iconic American landmark.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"

          },
          {
            id: 2,
            name: "Classic Scarborough",
            img: "/img/scarborough.svg",
            img2: "/img/scarborough2.svg",
            img3: "/img/scarborough3.svg",
            desc: "The Scarborough Bluffs are a series of bluffs along the shore of Lake Ontario in Toronto, Canada. They are known for their dramatic cliffs, which are made up of layers of shale and clay. The Scarborough Oak design captures the essence of these bluffs with its swirling wood grain and deep grey tones. This design is perfect for anyone who wants to bring a touch of urban drama to their home. It is also a good choice for kitchens and bathrooms, as it is waterproof and stain-resistant.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 3,
            name: "Jeffersonian Oak",
            img: "/img/jeffer.svg",
            img2: "/img/jeffer2.svg",
            img3: "/img/jeffer3.svg",
            desc: "Inspired by the timeless elegance of Thomas Jefferson, this unique oak design exudes a lighter tone with grey notes, perfectly suited for those who appreciate the natural beauty of the United States. It reflects Jefferson's commitment to architectural refinement and a deep connection to nature. Immerse yourself in the essence of American heritage with Plankton's Jeffersonian Oak.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 4,
            name: "Ethereal Horizon",
            img: "/img/ethereal.svg",
            img2: "/img/ethereal2.svg",
            img3: "/img/ethereal3.svg",
            desc: "Our Davos Pecan wood design is a testament to the art of subtlety and timeless elegance. Its delicate veins imbued with a unique blend of yellow, grey, and the faintest hints of light brown, create an atmosphere of serenity and refinement. Each plank is a brushstroke of sophistication, beckoning you to a space where understated luxury meets your dreams.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 5,
            name: "Aurora Craft",
            img: "/img/aurora.svg",
            img2: "/img/aurora2.svg",
            img3: "/img/aurora3.svg",
            desc: "Aurora Craft draws its inspiration from the scenic landscapes of Oslo, Norway. The city's natural beauty, particularly its lush oak forests, served as the foundation for the design. In Oslo, the oak trees stand tall and strong, providing shade, shelter, and a sense of serenity to the inhabitants",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 6,
            name: "LegacyWood OilGlow",
            img: "/img/legacy.svg",
            img2: "/img/legacy2.svg",
            img3: "/img/legacy3.svg",
            desc: "Experience the timeless charm of 'LegacyWood OilGlow,' where the embrace of natural wood is bathed in the radiance of American icons. Inspired by the enduring spirit of Plankton beneath the ocean's surface, this design captures the richness and authenticity of nature. The oil varnish finish adds depth and character, reminiscent of the enduring quality of iconic American legacies. 'LegacyWood OilGlow' is more than just flooring; it's a tribute to the lasting impressions of American heritage, an ode to craftsmanship that stands the test of time. Elevate your surroundings with the allure of 'LegacyWood OilGlow,' where every step is a step through the landscapes that have shaped generations.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 7,
            name: "Enigma Woodcraft",
            img: "/img/enigma.svg",
            img2: "/img/enigma2.svg",
            img3: "/img/enigma3.svg",
            desc: "Unveil the 'Enigma Woodcraft' - a masterpiece that unravels the mysteries of the natural world. With an extraordinary blend of rich tones and captivating knot and vein patterns, these planks capture the essence of the wild, much like Plankton's enduring presence beneath the ocean's surface. Each plank is a testament to nature's artistry, a reflection of the untamed beauty that lurks in the heart of the forest. 'Enigma Woodcraft' isn't just flooring; it's an open invitation to journey through the enigmatic depths of the woodland, a voyage of wonder. Elevate your surroundings with the extraordinary simplicity and the allure of 'Enigma Woodcraft,' where every step you take is a step deeper into the mysteries of the natural world.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 8,
            name: "Granite Majesty",
            img: "/img/granite.svg",
            img2: "/img/granite2.svg",
            img3: "/img/granite3.svg",
            desc: "This distinguished product draws inspiration from the stunning Yosemite National Park. With a striking grey finish reminiscent of the park's awe-inspiring granite cliffs, Yosemite Oak brings the grandeur and serenity of this iconic American landmark into your home.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 9,
            name: "Heritage Oak",
            img: "/img/heritage.svg",
            img2: "/img/heritage2.svg",
            img3: "/img/heritage3.svg",
            desc: "Rooted in the tradition of American woodcraft, this design pays homage to the enchanting colors found in the heart of the USA's woodlands. Our floors, like whispers from the forest, bring a touch of rustic elegance to your space.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 10,
            name: "Obsidian Noir Elegance",
            img: "/img/obsidian.svg",
            img2: "/img/obsidian2.svg",
            img3: "/img/obsidian3.svg",
            desc: "Introducing 'Obsidian Noir Elegance' – a design that resonates with the modernity and sophistication of the new generation. Much like the Plankton's ability to adapt to evolving environments, this unique black hue stands as a symbol of change and progress. With its distinctive aesthetics, 'Obsidian Noir Elegance' embraces the spirit of new beginnings. It's not just a floor; it's an embodiment of individuality, a canvas for the new generation to make their mark. Elevate your space with the bold and timeless allure of 'Obsidian Noir Elegance,' where every step is a step into the future of design.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 11,
            name: "Planktonic Resilience oak",
            img: "/img/planktop.svg",
            img2: "/img/planktop2.svg",
            img3: "/img/planktop3.svg",
            desc: "Experience the 'Planktonic Resilience Oak'- a floor that mirrors the enduring strength and adaptability of Plankton in the depths of the sea. With its sturdy structure and natural oak finish, this flooring offers unparalleled durability, akin to the tough exterior of Plankton. Crafted with the remarkable properties of SPC (Stone Plastic Composite) flooring, it's not just about beauty but also about enduring strength and resilience. 'Planktonic Resilience Oak' isn't your typical floor; it's an embodiment of tenacity, a testament to the enduring qualities of nature, and an ode to durability. Elevate your surroundings with a floor that thrives against the challenges of time, just like Plankton.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 12,
            name: "Route-66 Odyssey",
            img: "/img/route66.svg",
            img2: "/img/route662.svg",
            img3: "/img/route663.svg",
            desc: "Embark on an 'Odyssey' with 'Route 66,' where the rich brown and black hues evoke the timeless spirit of this iconic American road. Much like the intricate life web of Plankton in the depths of the sea, this design captures the interconnectedness of American culture along this historic route. The detailed patterns symbolize the myriad stories and experiences shared by travellers throughout the years. 'Route 66 Odyssey' is more than just flooring; it's a tribute to the vibrant history of this celebrated road, an ode to the diverse tapestry of American heritage. Elevate your surroundings with the enduring charm of 'Route 66 Odyssey,' where every step is a step through the heart of North America's cultural heritage.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 13,
            name: "Sankofa Wood Craft",
            img: "/img/sankofa.svg",
            img2: "/img/sankofa2.svg",
            img3: "/img/sankofa3.svg",
            desc: "Discover the 'Sankofa WoodCraft'- a design that honors the rich heritage and enduring legacy of African American culture. Much like Plankton's resilience in the heart of the ocean, this design embodies the strength, beauty, and history of a people. The intricate veins in the wood patterns symbolize the intricate stories woven through generations. 'Sankofa WoodCraft' is not just flooring; it's an homage to the past, a celebration of the present, and a promise to the future. Elevate your surroundings with the enduring charm of 'Sankofa WoodCraft,' where every step is a step into the heart of African American culture.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 14,
            name: "Patriot Memorial Silver",
            img: "/img/patriot.svg",
            img2: "/img/patriot2.svg",
            img3: "/img/patriot3.svg",
            desc: "Introducing 'Patriot's Memorial Silver' - a design that captures the spirit of remembrance and reflection, much like the enduring presence of Plankton in the depths of the ocean. With its subtle silver tone and minimal patterns, this design embodies the essence of American respect for those who've served. Just as Plankton plays a vital role in the ocean's web of life, 'Patriot's Memorial Silver' embraces the solemnity and honor of an iconic American holiday. It's more than just flooring; it's a tribute to the sacrifice, dedication, and memory that Memorial Day represents. Elevate your surroundings with the serene beauty of 'Patriot's Memorial Silver,' where every step is a step into the heart of American gratitude.",
            size: "7' x 48' and 9' x 48",
            thickness: "4mm, 5mm",
            underpad: "1mm, 1.5mm",
            wear: "12mil, 20mil"
          }
        ],
        viva: [ 
            {
            id: 15,
            name: "Appalachian Heritage",
            img: "/img/appalachian.svg",
            img2: "/img/appalachian2.svg",
            desc: "This remarkable wood design, Kajaki Oak pays homage to the rugged, natural beauty of the Appalachian Mountains. Its rich, cream-toned canvas is adorned with intricate knots, reminiscent of the enduring spirit of the American wilderness. With a mix of creamy, white, and deep brown shades, it captures the essence of this iconic region. Experience the legacy of American craftsmanship with Plankton's Appalachian Heritage.",
            size: "9' x 72'",
            thickness: "6mm",
            underpad: "1.5mm",
            wear: "20mil"
            },
            {
              id: 16,
              name: "Whispering Zephyr",
              img: "whispering",
              img2: "",
              desc: "This exquisite wood design embodies the very essence of understated luxury. With its light, ethereal tones and delicate veins, it evokes a sense of refined elegance. The subtle interplay of grey and soft yellow hues is accentuated by the masterful touch of a white-brushed finish, which adds a touch of sophistication.",
              size: "9' x 72'",
              thickness: "6mm",
              underpad: "1.5mm",
              wear: "20mil"
            }
        ],
        luxicore: [ 
            {
            id: 17,
            name: "Marine Slate Planks",
            img: "/img/marine.svg",
            img2: "/img/marine2.svg",
            img3: "/img/marine3.svg",
            desc: "Introducing 'Marine Slate Planks' - where nature's artistry meets the premium allure of the deep sea. These planks are a symphony of artistry and nature, featuring exquisite knots and veins that mirror the enigmatic charm of the ocean's depths. Crafted to perfection, our long planks are the epitome of sophistication, evoking the allure of hidden treasures beneath the waves. With 'Marine Slate Planks,' you're not just adding flooring; you're inviting the mystique of the deep sea into your space. Embrace the extraordinary in simplicity and elevate your surroundings with this oceanic masterpiece.",
          },
          {
            id: 18,
            name: "Subaqueous Onyx",
            img: "/img/subaqueous.svg",
            img2: "/img/subaqueous2.svg",
            img3: "/img/subaqueous3.svg",
            desc: "Dive into the world of elegance with our 'Subaqueous Onyx Planks.' These planks are a manifestation of nature's ingenuity, showcasing intricate knots and veins that echo the timeless allure of the deep sea. Meticulously crafted, our long planks embody the zenith of sophistication, reminiscent of hidden treasures concealed beneath the ocean's depths. 'Subaqueous Onyx Planks' go beyond being mere flooring; they beckon the mystique of the deep sea into your living space, delivering the extraordinary through simplicity. Unearth the oceanic masterpiece that is 'Subaqueous Onyx Planks,' where every step you take becomes a voyage of wonder.",
            size: "7' x 60' and 9' x 60",
            thickness: "5mm, 6mm",
            underpad: "1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 19,
            name: "Coastal Elegance",
            img: "/img/coastal.svg",
            img2: "/img/coastal2.svg",
            desc: "Newport Oak is a luxurious masterpiece, perfect for homes with opulence. With its gentle tonal hues, including the refined use of grey, it embodies a premium aesthetic that complements luxury living. Every plank is a work of art, a tribute to the beauty of high-end design. Experience the epitome of sophistication with Plankton's Coastal Elegance.",
            size: "7' x 60' and 9' x 60",
            thickness: "5mm, 6mm",
            underpad: "1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 20,
            name: "Atlantic Shadowwood",
            img: "/img/atlantic.svg",
            img2: "/img/atlantic2.svg",
            img3: "/img/atlantic3.svg",
            desc: "Introducing 'Atlantic Shadowwood' – a work of art created from the finest American timber. This premium design, inspired by the subtle elegance of Plankton, boasts a palette of refined grey tones with mesmerizing dark knots. Crafted with care and precision, our planks are a tribute to the tenacity of nature, much like Plankton's enduring spirit in the depths of the ocean. 'Atlantic Shadowwood' transcends mere flooring; it's an invitation to explore the mysteries of the sea within your living space. Elevate your surroundings with the extraordinary simplicity and enigmatic beauty of 'Atlantic Shadowwood.",
            size: "7' x 60' and 9' x 60",
            thickness: "5mm, 6mm",
            underpad: "1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 21,
            name: "Golden Harvest Oak",
            img: "/img/golden.svg",
            img2: "/img/golden2.svg",
            desc: "Embrace the warmth of natural oak with our Golden Harvest Oak SPC floors. The dark yellowish hue and distinctive oak-like veins create a timeless, inviting atmosphere in your space. With Plankton's Golden Harvest Oak, you bring a touch of the American heartland to your home.",
            size: "7' x 60' and 9' x 60",
            thickness: "5mm, 6mm",
            underpad: "1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 22,
            name: "Italiano Festa Wood",
            img: "/img/italiano.svg",
            img2: "/img/italiano2.svg",
            desc: "Experience the 'Italiano Festa Wood' – a design that pays tribute to the rich traditions and celebratory spirit of Italian Americans, much like Plankton's vibrant presence in the depths of the sea. The intricate wood patterns capture the artistic and passionate essence of Italian culture. 'Italiano Festa Wood' is not just flooring; it's an embodiment of Italian American heritage, a celebration of la dolce vita, and an ode to the beauty of Italian festivities. Elevate your surroundings with the lively charm of 'Italiano Festa Wood,' where every step is a dance to the rhythms of Italian culture.",
            size: "7' x 60' and 9' x 60",
            thickness: "5mm, 6mm",
            underpad: "1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 23,
            name: "Golden Sequio Glow",
            img: "/img/sequio.svg",
            img2: "/img/sequio2.svg",
            img3: "/img/sequio3.svg",
            desc: "Embark on a journey with 'Golden Sequoia Glow,' where the golden hues of the Sequoia forests meet the understated elegance of Plankton's intricate designs. Each plank is a canvas painted by nature itself, adorned with the veins and knots that weave tales of resilience and strength, much like the vibrant coastal ecosystem of California's Sequoia National Park. Crafted to perfection, 'Golden Sequoia Glow' exudes a natural radiance that enriches your space. It's more than just flooring; it's an invitation to bask in the tranquil beauty of America's natural wonders. Elevate your surroundings with the extraordinary simplicity and the allure of 'Golden Sequoia Glow,' where every step resonates with the beauty of the Sequoia forests.",
            size: "7' x 60' and 9' x 60",
            thickness: "5mm, 6mm",
            underpad: "1.5mm",
            wear: "12mil, 20mil"
          },
          {
            id: 24,
            name: "Swiftstyle Oak",
            img: "/img/swift.svg",
            img2: "/img/swift2.svg",
            desc: "This contemporary oak design is as vibrant and captivating as the dynamic spirit of a young, trendsetting American icon, Taylor Swift. Just like Taylor's modern and influential style, Hudson Urban Oak is the choice of those who seek a blend of classic and chic. The design is fresh, bold, and effortlessly cool, making it the ultimate choice for those in tune with the latest trends.",
            size: "7' x 60' and 9' x 60",
            thickness: "5mm, 6mm",
            underpad: "1.5mm",
            wear: "12mil, 20mil"
          },
        ],
      };
    
    const allProducts = Object.values(collectionData).flat();
    const product = allProducts.find((p) => p.id === parseInt(id));
    console.log(product)
    if (!product) {
      return <div>Product not found</div>;
    }

    const [selectedImg, setSelectedImg] = useState(product.img)

    useEffect(() => {
        setZoom(1); 
      }, [selectedImg]);

    const [zoom, setZoom] = useState(1); 

    const handleZoomIn = () => {
      setZoom((prevZoom) => Math.min(prevZoom + 0.1, 3)); 
    };

    const handleZoomOut = () => {
      setZoom((prevZoom) => Math.max(prevZoom - 0.1, 1)); 
    };


  return (
    <div className='bg-white mt-3 '>

   
    <div className='w-full flex xl:flex-row flex-col gap-20 justify-center xl:items-start items-center bg-white pt-14 pb-10 md:pb-20 '>
        <div className=' flex md:flex-row  flex-col-reverse gap-4 justify-center items-center md:items-start '>
           <div className='flex md:flex-col flex-row gap-4 '>
                <div className='relative'>
                   {selectedImg === product.img && 
                   <div className='absolute top-1 right-1 '>
                        <img src="/img/CheckBox.svg"/>
                    </div>} 
                  <img src={product.img} alt={product.name} onClick={()=>setSelectedImg(product.img)} className={`w-[88px] h-[135px] cursor-pointer rounded-[6px] ${selectedImg === product.img && "border-[2px] border-[#F29622]" } object-cover `}/>
               
                </div>
                
                <div className='relative'>
                   {selectedImg === product.img2 && 
                   <div className='absolute top-1 right-1 '>
                        <img src="/img/CheckBox.svg"/>
                    </div>} 
                  <img src={product.img2} alt={product.name} onClick={()=>setSelectedImg(product.img2)} className={`w-[88px] h-[135px] cursor-pointer rounded-[6px] ${selectedImg === product.img2 && "border-[2px] border-[#F29622]" } object-cover `}/>
               
                </div>

                {product.img3 && <div className='relative'>
                   {selectedImg === product.img3 && 
                   <div className='absolute top-1 right-1 '>
                        <img src="/img/CheckBox.svg"/>
                    </div>} 
                  <img src={product.img3} alt={product.name} onClick={()=>setSelectedImg(product.img3)} className={`w-[88px] h-[135px] cursor-pointer rounded-[6px] ${selectedImg === product.img3 && "border-[2px] border-[#F29622]" } object-cover `}/>
               
                </div>}
           </div>

           <div className='relative md:w-[455px] md:h-[455px] w-[90vw] h-[455px] overflow-hidden   '>
           <div className="absolute z-40 flex gap-x-4 top-5 right-5">
                    <button onClick={()=>handleZoomIn()}
                      className="md:w-[45px] md:h-[45px] w-[35px] h-[35px] rounded-full bg-white drop-shadow-md flex justify-center items-center"
                    >
                      <ZoomInOutlinedIcon
                        sx={{
                          '@media (min-width:300px)': { fontSize: '18px' },
                          '@media (min-width:768px)': { fontSize: '24px' },
                          '@media (min-width:960px)': { fontSize: '24px' },
                        }}
                      />
                    </button>
                    <button onClick={()=>handleZoomOut()}
                      className="md:w-[45px] md:h-[45px] w-[35px] h-[35px] rounded-full bg-white drop-shadow-md flex justify-center items-center"
                    >
                      <ZoomOutIcon
                        sx={{
                          '@media (min-width:300px)': { fontSize: '18px' },
                          '@media (min-width:768px)': { fontSize: '24px' },
                          '@media (min-width:960px)': { fontSize: '24px' },
                        }}
                      />
                    </button>
                  </div>

             <img src={selectedImg} alt={product.name} style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease-in-out', }} 
             className='w-full h-full rounded-[8px] object-cover '/>
           </div>

           <div>
           <p className='text-[22px] font-medium font-workSans text-[#F29622B2] flex md:hidden '>{collectionName === "eco" && "Eco Crafted Elegance Series"}</p>
            <p className='text-[22px] font-medium font-workSans text-[#F29622B2] flex md:hidden '>{collectionName === "luxicore" && "Luxicore Legacy Series"}</p>
            <p className='text-[22px] font-medium font-workSans text-[#F29622B2] flex md:hidden'>{collectionName === "viva" && "Viva Wood Series"}</p>
            <p className='text-[#101010] text-[34px] font-semibold font-workSans flex md:hidden'>{product.name}</p>
           </div>
        </div>

        <div className='xl:w-[40%] w-[90%] '>
            <p className='text-[22px] font-medium font-workSans text-[#F29622B2] md:flex hidden '>{collectionName === "eco" && "Eco Crafted Elegance Series"}</p>
            <p className='text-[22px] font-medium font-workSans text-[#F29622B2] md:flex hidden '>{collectionName === "luxicore" && "Luxicore Legacy Series"}</p>
            <p className='text-[22px] font-medium font-workSans text-[#F29622B2] md:flex hidden'>{collectionName === "viva" && "Viva Wood Series"}</p>
            <p className='text-[#101010] text-[40px] font-semibold font-workSans md:flex hidden'>{product.name}</p>
            <p className=' text-[#5F5F5F] text-[16px] font-normal font-workSans md:mt-4 -mt-8  '>{product.desc}</p>

            <p className='text-[#101010] text-[26px] font-workSans font-semibold mt-6 '>Specifications</p>

          {product.size && <p className='text-[18px] mt-3 font-bold font-workSans text-[#101010] '>Size:&nbsp;&nbsp; {product.name === "Appalachian Heritage" || product.name === "Whispering Zephyr" ? (
           <b className='text-[#5F5F5F] font-medium'>{product.size}</b>
            ) : (
           <b className='text-[#5F5F5F] font-medium'>{product.size}"</b>
           )}</p>}
          {product.thickness &&  <p className='text-[18px] mt-1 font-bold font-workSans text-[#101010] '>Thickness:&nbsp;&nbsp; <b className='text-[#5F5F5F] font-medium '>{product.thickness}</b></p>}
          {product.underpad &&  <p className='text-[18px] mt-1 font-bold font-workSans text-[#101010] '>Underpad Option:&nbsp;&nbsp; <b className='text-[#5F5F5F] font-medium '>{product.underpad}</b></p>}
          {product.wear && <p className='text-[18px] mt-1 font-bold font-workSans text-[#101010] '>Wear Resistant Layer:&nbsp;&nbsp; <b className='text-[#5F5F5F] font-medium '>{product.wear}</b></p>}
       
          <div className='flex md:flex-row flex-col md:mt-8 mt-10  gap-3 md:gap-5'>
             {/* <button className='md:w-[300px] w-[90vw] h-[50px] rounded-[10px] bg-[#101010] text-white font-semibold text-[16px] font-workSans '>Installation Guide</button> */}
             <a href='' className='effect w-[90vw] md:w-[300px] '>
              <span>Installation Guide</span>
              <div className='liquid  md:w-[300px] w-[90vw] h-[300px]  '></div>
             </a>
             <button className='md:w-[300px] w-[90vw] h-[50px] rounded-[10px] bg-[#101010] text-white font-semibold text-[16px] font-workSans '>Inquire Now</button>
          </div>
        </div>
      
    </div>

    <Features/>
    <Inquire/>
    </div>
  )
}

export default ProductDetails
