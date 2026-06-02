import React, { useEffect, useState } from "react";
import productsearch from "./productdata";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "react-use-cart";


export default function Header() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const { totalItems } = useCart();

  useEffect(() => {

    const user = localStorage.getItem("username");

    if (user) {
      setUsername(user);
    }

  }, []);


  const menuItems = ["Home", "About us", "Shop", "Menu", "Vendors", "Pages", "Contact", "Account"]
  const [productdata, setproductdata] = useState(productsearch)
  const [count, setcount] = useState(1)

  const [showSearch, setShowSearch] = useState(false);

  const [find, setfind] = useState("")
  const handlesearch = (e) => {
    setfind(e.target.value);
  }
  // console.log(find)


  function handleLogout() {

    localStorage.removeItem("userid");
    localStorage.removeItem("username");

    navigate("/login");
  }



  const filterproducts = find ? productdata.filter((item) => item.name.toLowerCase().includes(find.toLowerCase())) : [];





  return (
    <>
      <section id="mainsection">
        <nav className="navbar">
          <img
            src="https://your-daily-need.netlify.app/static/media/logo.312c90ddea629dd64ff6fc506a5f3e6c.svg"
            alt="logo_img"
            width="150px"
          />
 
         <div
  className={showMenu ? "hamburger active" : "hamburger"}
  onClick={() => setShowMenu(!showMenu)}
>
  ☰
</div>
          <div className="navbar-searchbar" >
            <select>
              <option>All Categories</option>
              <option>Vegetable</option>
              <option>Fruits</option>
            </select>

            <input onChange={handlesearch} onFocus={() => setShowSearch(true)}
              onBlur={() => setTimeout(() => setShowSearch(false), 200)}
              value={find} type="text" placeholder="Search for items" />
            <i className="fa fa-search"></i>


            {showSearch && find.trim() !== "" && (
              <div className="srcproduct">
                {filterproducts.length === 0 ? (
                  <p>Product not found</p>
                ) : (
                  <div className="srcproduct-grid">
                    {filterproducts.map((p) => (
                      <div className="srcproduct-cards" key={p.id} onClick={() => navigate(`/category/${p.id}`, { state: p })}>
                        <h5>{p.desc}</h5>

                        <h4>{p.name}</h4>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>


          <ul className="nav-icons">
            <li>
              <a href="#">
                <i className="fa fa-recycle"></i>
              </a>
              Compare
            </li>

            <li>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
              Wishlist
            </li>

            <li>
              <a href="#">
                <i className="fa fa-shopping-basket"> </i>
                <Link to="/cart">Cart</Link>
              </a>
            </li>

            {totalItems > 0 && (
              <span className="cart-badge">
                {totalItems}
              </span>
            )}



            <li>
              <a href="#">
                <i className="fa fa-user"></i>
              </a>
              <Link to="/account">Account</Link>
            </li>
            <li>

              <a href="#">
                <i className="fa fa-user"></i>
              </a>

              

              {
                username ? (
                  <>
                        
                    <span style={{ marginRight: "10px" }}>
                      {username}
                    </span>
                    
                    <button onClick={handleLogout}>
                      Logout
                    </button>

                  </>
                ) : (

                  <Link to="/login">Login</Link>

                )
              }

            </li>

          </ul>
        </nav>




        <hr />

        <nav className="navbar">
         

          {/* <ul className="menu"> */}
          <ul className={showMenu ? "menu active" : "menu"}>
            {menuItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>


          <div className="support">
            <div className="headphone-img">
              <img src="https://your-daily-need.netlify.app/static/media/icon-headphone%20-%20Copy.c3fb047a0eb9f39bc24262dda11da296.svg" alt="help" width={40} />
            </div>
            <div className="headphonetext">
              <h1>1988-899</h1>
              <h4>24/7 Customers Support</h4>
            </div>
          </div>
        </nav>


        <section className="hero">
          <div className="hero-text">
            <h2>Fresh Vegetables <br /> Big Discount</h2>
            <h4>Save upto 50 % on your first order</h4>


            <form action="" className="sliderform">
              <i className="fa-regular fa-paper-plane"></i>
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </form>
          </div>



        </section>


      </section>
    </>
  )
}



