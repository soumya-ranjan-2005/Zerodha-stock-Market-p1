import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/home/homepage';
import Signup from './landing_page/signup/signup';
import Aboutpage from './landing_page/about/aboutpage';
import Productpage from './landing_page/products/productpage'; 
import Pricingpage from './landing_page/pricing/pricingpage';
import Supportpage from './landing_page/support/supportpage';
import Navbar from './landing_page/navbar';
import Footer from './landing_page/footer';
import NotFound from './landing_page/notfound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/about" element={<Aboutpage />}/>
        <Route path="/products" element={<Productpage />}/>
        <Route path="/pricing" element={<Pricingpage />}/>
        <Route path="/support" element={<Supportpage />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
);

