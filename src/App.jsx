import './App.css'
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Inquire from './components/Inquire/Inquire'
import ProductsPage from './components/OurProducts/ProductsPage';
import ProductDetails from './components/OurProducts/ProductDetails';
import AboutUs from './components/AboutUs/AboutUs';
function App() {
 
  const [active, setActive] = useState("");
  return (
    <div className='bg-[#f4f4f4] '>
    <BrowserRouter>
    <Navbar active={active} setActive={setActive} />
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/collection/:collectionName" element={<ProductsPage active={active} setActive={setActive}/>}/>
       <Route path="/product/:collectionName/:id" element={<ProductDetails/>}/>
       <Route path="/about" element={<AboutUs/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
     
    </div>
  )
}

export default App
