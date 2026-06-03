import { useState } from 'react'
// import './index.css';
import './app.css'
import Login from './components/login';
import Header from './components/header';
import Categories from './components/categories';
import {Productapp} from "./components/products";
import DailysellsProdt from './components/dailysellsprodt';
import DealOfDay from './components/Dealofday';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footerbanner from './components/footerbanner';
import Footer from './components/footer';
import Cart from './components/cart';
import CategoryDetails from './components/categoriesdetails';
import Getdata from './api/getdata';
import Signup from './auth/signup';

function App() {
   return (
    <>
     <Header/>
     <Categories/> 
     <Productapp/> 
     <DailysellsProdt/>
     <DealOfDay/>
     <Footerbanner/>
     <Footer/>   
    </>
  )
}

export default App
