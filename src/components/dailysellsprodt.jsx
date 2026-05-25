
import React from "react";

export default function DailysellsProdt() {

   const  products = [
     { id:1, name: "seed of change organic quites", price: 40, old: 50, img: "https://your-daily-need.netlify.app/static/media/product-1-1%20-%20Copy.b6014f69e378206a53e3.jpg" },
     { id:2, name: "seed of change organic quites", price: 40, old: 50, img: "https://your-daily-need.netlify.app/static/media/product-2-2%20-%20Copy.e0a56e874a6703295fe8.jpg" },
     { id:3, name: "seed of change organic quites", price: 40, old: 50, img: "https://your-daily-need.netlify.app/static/media/product-4-2%20-%20Copy.7066ae27150971779333.jpg" },
     { id:4, name: "seed of change organic quites", price: 40, old: 50, img: "https://your-daily-need.netlify.app/static/media/product-2-2%20-%20Copy.e0a56e874a6703295fe8.jpg" },
    ];

  return (
   <div className="daily-products">

               <div className="bringnature">
                    <div className="bringnature-img">
                         <img width="280px" src="https://your-daily-need.netlify.app/static/media/banner-4.e4c8adbb80eb46aa2c91.png" alt="" />
                     </div>
                     <div className="bringnature-text">
                         <h1>Bring nature into <br /> your home</h1>
                         <button>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                     </div>
                 </div>
        

      <div className="product-list">
        {products.map((p, i) => (
          <div className="product-card" key={i}>
            <span className="badge">New</span>
            <img src={p.img} alt="" />

            <p className="category">snack</p>
            <h4>{p.name}</h4>

            <div className="rating">⭐⭐⭐⭐⭐ (4.0)</div>
            <p className="brand">By Nest Food</p>

            <div className="price">
              <span className="new">${p.price}.00</span>
              <span className="old">${p.old}.00</span>
            </div>

            <button className="cart-btn">🛒 Add to cart</button>
          </div>
        ))}
      </div>
    </div>
    
  );
}


