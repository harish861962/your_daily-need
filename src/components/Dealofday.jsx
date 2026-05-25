
import React from "react";

const products = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
  },
];

export default function DealOfDay() {
  return (
    <div className="deal-container">
      <h1 className="title">Deal of the Day</h1>

      <div className="cards">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <div className="img-box">
              <img src={item.img} alt="product" />

              <div className="timer">
                <div><span>1060</span>Days</div>
                <div><span>7</span>Hours</div>
                <div><span>20</span>Mins</div>
                <div><span>34</span>sec</div>
              </div>
            </div>

            <div className="card-content">
              <h4>Seed of change organic ,quinoa brown</h4>

              <div className="rating">
                ⭐⭐⭐⭐⭐ <span>(4.0)</span>
              </div>

              <p className="brand">
                By<span> Nest Food</span>
              </p>

              <div className="bottom">
                <div>
                  <span className="new">$50</span>
                  <span className="old">$80</span>
                </div>

                <button className="add-btn">🛒 Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}