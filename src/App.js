import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { createGlobalStyle } from "styled-components";
import ProductDetails from "./components/ProductDetails";
import BuyTshirts from "./components/BuyTshirts";
import WomenTshirts from "./components/WomenTshirt";
import MenTshirts from "./components/MenTshirt";
import Contact from "./components/Contact";
import About from "./components/About";
import { createContext, useContext, useState } from "react";
 


const GlobalStyles = createGlobalStyle`
body{

  button{
    cursor: pointer;
  }


  font-family: "Dosis", sans-serif;
  overflow-y: auto;

 
::-webkit-scrollbar {
  width: 12px;  
}

 
::-webkit-scrollbar-track {
  background: white;  
}

 
::-webkit-scrollbar-thumb {
  background: lightgrey;  
  border-radius: 6px; 
}

 
::-webkit-scrollbar-thumb:hover {
  background: darkgrey;  
  cursor: pointer;
}


 }


`

const CartContext = createContext();

export function useCart() {
   return useContext(CartContext)
}
 

function App() {


  const[cart,setCart] = useState([])


  const addToCart = (item) =>{
    setCart([...cart,item])
  }

  return (
    <>
  <GlobalStyles/>
  <CartContext.Provider value={{cart,addToCart}} >

  <BrowserRouter>
  <Routes>
  <Route path="/home" element={<HomePage />} />
  <Route path="/shop" element={<BuyTshirts />} />
  <Route path="/women-tshirts" element={<WomenTshirts />} />
  <Route path="/men-tshirts" element={<MenTshirts />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/shop/product/:id" element={<ProductDetails />} />
  <Route path="/" element={<LoginPage/>}/>
  </Routes>
  </BrowserRouter>
  </CartContext.Provider>
 
  </>
  );
}

export default App;
