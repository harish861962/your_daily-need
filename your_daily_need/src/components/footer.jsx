
import React from "react";


export default function Footer() {

  const sections = [
    {
      title: "Company",
      links: [
        "About Us",
        "Delivery Information",
        "Privacy Policy",
        "Terms & Conditions",
        "Contact Us",
        "Help Center",
        "Careers"
      ]
    },
    {
      title: "Account",
      links: [
        "Sign In",
        "View Cart",
        "My Wishlist",
        "Track My Order",
        "Help Ticket",
        "Shipping Details",
        "Product Details"
      ]
    },
    {
      title: "Corporate",
      links: [
        "Become a Vendor",
        "Farmhouse",
        "Farmer",
        "Farm Conditions",
        "Farm Career",
        "Our Suppliers",
        "Our Promotions"
      ]
    },
    {
      title: "Popular",
      links: [
        "Milkshake",
        "Butter & Margarine",
        "Eggs Substitutes",
        "Marmalades",
        "Cheese",
        "Butterscotch",
        "Tea & Coffee"
      ]
    }
  ];

  return (
    <footer className="footer">

      <div className="footer-top">

        {/* LEFT SECTION */}
        <div className="footer-box brand">
          <img
            className="logo"
            src="https://your-daily-need.netlify.app/static/media/logo.312c90ddea629dd64ff6fc506a5f3e6c.svg"
            alt="logo"
          />
          <p>Awesome grocery store website template</p>

          <p><b>Address:</b><br/>5171 W Campbell Ave undefined Kent,<br /> United States</p>
          <p><b>Call Us:</b><br/>(+91) - 540-025-124553</p>
          <p><b>Email:</b><br/>dummysale@Nest.com</p>
          <p><b>Hours:</b><br/>10:00 - 18:00, Mon - Sat</p>
        </div>

        {/* MAP SECTIONS */}
        {sections.map((sec, index) => (
          <div className="footer-box" key={index}>
            <h4>{sec.title}</h4>
            <ul>
              {sec.links.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* INSTALL APP */}
        <div className="footer-box">
          <h4>Install App</h4>
          <p>From App Store or Google Play</p>

          <div className="app-buttons">
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" />
          </div>

          <h5 className="payment-title">Secured Payment Gateway</h5>

          <div className="payments">
           
            <img src="https://your-daily-need.netlify.app/static/media/payment-method%20-%20Copy.47ad3e696f50516da1b3.png" />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="left">
          <p>© 2022 Nest - React Ecommerce Template</p>
          <p>Copyright All right reserved By Harish Saini</p>
          <p> Designed and Developed By Harish Saini</p>
         
        </div>

        <div className="center">
          <h4>1800-666</h4>
          <span>Working 8:00 - 22:00</span>

        <div className="center">
          <h4>1800-888</h4>
          <span>24/7 Customer Support</span>
        </div>
        </div>

        <div className="right">
          <h4>Follow us</h4>
          <div className="social">
            <i className="fa fa-car"></i>
            <i className="fa fa-user"></i>
            <i className="fa fa-user"></i>
            <i className="fa fa-user"></i>
          </div>
          <p>Up to 15% discount on your first subscription</p>
        </div>

      </div>

    </footer>
  );
}