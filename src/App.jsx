import React from "react";
import Home from "./components/Pages/Home";
import Navbar from "./components/Haeder/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import ProductDetail from "./components/Pages/ProductDetail";
import Cart from "./components/Pages/Cart";
import SignUp from "./components/Pages/SignUp";
import Error from "./components/Pages/Error";
import Footer from "./components/Pages/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
