import React from "react";
export default function Categories(){
  const categories = [
    { name: "Organic Kiwi", items: 28, img:"https://your-daily-need.netlify.app/static/media/cat-1%20-%20Copy.ac89b9d18a5077eac3e8.png"},
    { name: "Peach", items: 14, img: "https://your-daily-need.netlify.app/static/media/cat-11%20-%20Copy.1b39a1174f4b4137bbbd.png" },
    { name: "Red Apple", items: 54, img: "https://your-daily-need.netlify.app/static/media/cat-9%20-%20Copy.b47d8bf4d6f4e0bca756.png" },
    { name: "Snack", items: 56, img: "https://your-daily-need.netlify.app/static/media/cat-3%20-%20Copy.9fadc9e19d2826cec910.png" },
    { name: "Vegetables", items: 72, img: "https://your-daily-need.netlify.app/static/media/cat-1%20-%20Copy.ac89b9d18a5077eac3e8.png" },
    { name: "Strawberry", items: 36, img: "https://your-daily-need.netlify.app/static/media/cat-2%20-%20Copy.fc1c1db18d79f5d98fe7.png" },
    { name: "Black Plum", items: 123, img: "https://your-daily-need.netlify.app/static/media/cat-4%20-%20Copy.5462cff6c1821944c2b7.png" },
    { name: "Custard Apple", items: 34, img: "https://your-daily-need.netlify.app/static/media/cat-5%20-%20Copy.aad30d7464c1b497bb8d.png" },
    { name: "Coffee & Tea", items: 89, img: "https://your-daily-need.netlify.app/static/media/cat-14%20-%20Copy.63624f8871ae4ec4f3a9.png" },
    { name: "Headphone", items: 87, img: "https://your-daily-need.netlify.app/static/media/cat-15%20-%20Copy.ca75690e37dc381e9f0c.png" },
    { name: "Headphone", items: 87, img: "https://your-daily-need.netlify.app/static/media/cat-15%20-%20Copy.ca75690e37dc381e9f0c.png" },
    { name: "Headphone", items: 87, img: "https://your-daily-need.netlify.app/static/media/cat-15%20-%20Copy.ca75690e37dc381e9f0c.png" },
  ];
return(
<>
 <div className="featured">
      <div className="top">
        <h2>Featured Category</h2>
        <div className="filters">
          <span>cake & milk</span>
          <span>coffee & tea</span>
          <span>pet foods</span>
          <span className="active">vegetables</span>
        </div>
      </div>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="card" key={index}>
            <img src={cat.img} alt="" />
            <h4>{cat.name}</h4>
            <p>{cat.items} item</p>
          </div>
        ))}
      </div>
      </div>


      <div className="banners">
        <div className="banner-1">
          <h4>Everyday Fresh & Clean with Our Products</h4>
          <button>Shop Now</button>
        </div>
        <div className="banner-2">
          <h4>Make your breakfast Healthy & easy</h4>
          <button>Shop Now</button>
        </div>
        <div className="banner-3">
          <h4>The best organic products Online</h4>
          <button>Shop Now</button>
        </div>
      </div>
</>
)
}