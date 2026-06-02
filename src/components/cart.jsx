
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Login from "./login";
import Signup from "../auth/signup";

export default function Cart(){

  // const [isLogin ,setisLogin] = useState()
    const navigate = useNavigate();
    const isLogin = localStorage.getItem("userid");

  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();

  if (isEmpty) return <h2 style={{textAlign:"center"}}> Your Cart is Empty 😢 </h2>;

  function checklogin(e){
  if(!isLogin){
    e.preventDefault();  
    toast.error("Please login first ❌");

    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);

  }else{
    toast.success("order sucess")
  }
}

  return(
    <div className="cart-page">
      <h2>Your Cart</h2>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          
          <img src={item.img} alt={item.name} />

          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Qty: {item.quantity}</p>
          </div>

          <div className="cart-actions">
            <button 
              className="qty-btn"
              onClick={() => {updateItemQuantity(item.id, item.quantity - 1)
                toast.info(`Quantity Decreased ${item.quantity } ${item.name}`);
              }}
              >
              -
            </button>

            <button 
              className="qty-btn"
              onClick={() => {updateItemQuantity(item.id, item.quantity + 1)
                toast.success(`Quantity Increased ${item.quantity } ${item.name}`);
              }}
            >
              +
            </button>

            <button 
              className="remove-btn"
              onClick={() => {removeItem(item.id)
                toast.error(`Item Removed  ${item.name}`);
              }}
            >
              Remove
            </button>
          </div>

        </div>
      ))}

      <div className="cart-total">
        Total: ₹{cartTotal}
        &nbsp;
        <Link to={isLogin ? "/orders" : "/login"} onClick={checklogin} ><button> Process to pay</button></Link>
        
      </div>
    </div>
  );
}