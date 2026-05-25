import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import product from './productdata';
import { toast } from 'react-toastify';

import { useCart } from "react-use-cart";

function Productapp(){


  const { addItem, items } = useCart();

const navigate = useNavigate();



function handleAddToCart(product) {
  navigate("/category/:{id}", { state: product });
}

const [products, setProducts] = useState(product);


// console.log(product)
const increment = (id) => {
  setProducts(prev =>
    prev.map(p =>
      p.id === id ? { ...p, qty: p.qty + 1 } : p
    )
  );
};

const decrement = (id) => {
  setProducts(prev =>
    prev.map(p =>
      p.id === id && p.qty > 1
        ? { ...p, qty: p.qty - 1 }
        : p
    )
  );
};





return(
<>
 <div className="products">
      <div className="top">
        <h2>Popular Products</h2>
        <div className="filters">
          <span className="active">All</span>
          <span>Milk & Dairies</span>
          <span>Coffee & Teas</span>
          <span>Pet Foods</span>
          <span>Meat</span>
          <span>Vegetables</span>
          <span>Fruits</span>
        </div>
      </div>

       

      <div className="products-grid">
  {products.map((p) => (
    <div className="product-cards" key={p.id} 
    
    >
      <span className="badge">New</span>
      <img onClick={(e) => {e.preventDefault() ;   handleAddToCart(p)}} src={p.img} alt="" />

      <h5>{p.desc}</h5>
      <h4>{p.name}</h4>

      <div className="rating">⭐⭐⭐⭐☆</div>
      <h6>{p.prodcttype}</h6>

      <div className="qty">
        <span className="new">₹{p.price * p.qty}</span>

        <button onClick={() => increment(p.id)}>+</button>

        <p>{p.qty}</p>

        <button onClick={() => decrement(p.id)}>-</button>



<button
  onClick={() => {
    const isInCart = items.find(i => i.id === p.id);

    if (isInCart) {
      toast.info("Already Added 🛒");
    } else {
      addItem(p);
      toast.success("Added to Cart ✅",{
        autoClose:3000,
        theme:"colored"
      });
    }
  }}
>
  {items.find(i => i.id === p.id) ? "Added ✅" : "Add To Cart"}
</button>

      </div>

      

      <span className="old">₹{p.oldPrice}</span>
    </div>
  ))}
</div>
      </div>

</>
)
}
export {Productapp} 