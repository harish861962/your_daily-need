import { StrictMode } from 'react'

import { createRoot } from "react-dom/client";

import App from "./App";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import DailysellsProdt from './components/dailysellsprodt';
import Cart from './components/cart';
import Categories from './components/categories';
import CategoryDetails from './components/categoriesdetails';
import {Productapp} from './components/products';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import Getdata from './api/getdata';
import { CartProvider } from "react-use-cart";
import Signup from './auth/signup';
import Todolist from './pages/todolist';
import Dashboard from './components/dashboard';
import Userdetails from './pages/usersdeatils';
import DashboardProduct from './pages/dashboardProduct';
import Login from './components/login';
import Orders from './pages/orders';





createRoot(document.getElementById("root")).render(
  <> 
  <HelmetProvider>
    <BrowserRouter>
    <CartProvider>
        
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/account/' element={<Dashboard/>}/>
      <Route path="/category/:{id}" element={<CategoryDetails/>} />
      <Route path="/cart/" element={<Cart />} />
      <Route path="/userdetails/" element={<Userdetails />} />
      <Route path="/signup/" element={<Signup />} />
      <Route path="/Products/" element={<DashboardProduct />} />
      <Route path="/login/" element={<App />} />
      <Route path="/header/" element={<App />} />
     <Route path="/dashboardProduct/:id" element={<CategoryDetails/>} />
     <Route path="/orders" element={<Orders/>} />

    </Routes>
    
     

    <ToastContainer position="top-center"  />
   
    </CartProvider>
      

  </BrowserRouter>
    </HelmetProvider>
  

  </>
)