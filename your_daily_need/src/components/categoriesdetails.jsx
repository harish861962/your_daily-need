
import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import products from "./dailysellsprodt";
import { Helmet } from "react-helmet-async";


export default function Cart(){
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal
  } = useCart();

   const location = useLocation();
  const product = location.state;

 //  ➕ increment
  // const increment = () => {
  //   setQty(prev => prev + 1);
  // };

  // ➖ decrement
  // const decrement = () => {
  //   setQty(prev => (prev > 1 ? prev - 1 : 1));
  // };


  if(!product){
    return <h2>No Product Selected</h2>;
  }
else{
  return(
    <>    
    <Helmet>
    <title>{product.name}</title>
    <meta name="description" content={product.desc} />
    </Helmet>

  
<div className="cart-container">


  <div className="cart-left">
    <h2>Cart Details</h2>

    <div className="cart-card">
      <img src={product.img} alt="" />

      <div className="cart-info">
        <h3>{product.name}</h3>
        <p>{product.desc}</p>

        <div className="price-row">
          <h4>Price: ₹{product.price}</h4>
          <h4>Qty: {product.qty}</h4>
        </div>

        <h2>Total: ₹{product.price * product.qty}</h2>
        <div className="qty">
        <span className="new">₹{product.price * product.qty}</span>

                  <button onClick={() => updateItemQuantity(product.id, product.quantity - 1)}>
                    -
                  </button>
        {/* <button onClick={() => increment(product.id)}>+</button> */}
        <p>{product.qty}</p>
<button onClick={() => updateItemQuantity(product.id, product.quantity + 1)}>
                    +
                  </button>
        {/* <button onClick={() => decrement(product.id)}>-</button> */}
        </div>

        <button>Add To Cart</button>
      </div>
    </div>

    <h3 className="related-title">Related Products</h3>

    <div className="related">
      <img src="https://your-daily-need.netlify.app/static/media/product-1-1%20-%20Copy.b6014f69e378206a53e3.jpg" />
      <img src="https://your-daily-need.netlify.app/static/media/product-2-2%20-%20Copy.e0a56e874a6703295fe8.jpg" />
      <img src="https://your-daily-need.netlify.app/static/media/product-4-2%20-%20Copy.7066ae27150971779333.jpg" />
      <img src="https://your-daily-need.netlify.app/static/media/product-1-1%20-%20Copy.b6014f69e378206a53e3.jpg" />
    </div>
  </div>

  
  <div className="cart-right">
    <h3>Order Summary</h3>

    <div className="summary-box">
      <p>Items Total</p>
      <p>₹{product.price}</p>
    </div>

    <div className="summary-box">
      <p>Quantity</p>
      <p>{product.qty}</p>
    </div>

    <div className="summary-total">
      <h4>Total Payable</h4>
      <h2>₹{product.price * product.qty}</h2>
    </div>

    <button className="checkout-btn">Proceed to Order</button>
  </div>

</div>


    </>
  );
}
}








// import React from "react";
// import { useCart } from "react-use-cart";

// export default function Cart(){

//   const {
//     isEmpty,
//     items,
//     updateItemQuantity,
//     removeItem,
//     cartTotal
//   } = useCart();

//   console.log("cart items:", items); // 👈 check here

//   if (isEmpty) return <h2>Your Cart is Empty</h2>;

//   return(
//     <div className="cart-page">
//       <h2>Your Cart</h2>

//       {items.map((item) => (
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>₹{item.price}</p>
//           <p>Qty: {item.quantity}</p>

//           <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
//             -
//           </button>

//           <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
//             +
//           </button>

//           <button onClick={() => removeItem(item.id)}>
//             Remove
//           </button>
//         </div>
//       ))}

//       <h3>Total: ₹{cartTotal}</h3>
//     </div>
//   );
// }