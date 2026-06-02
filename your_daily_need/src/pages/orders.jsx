import React, { useState } from "react";
import { toast } from "react-toastify";

import { useCart } from "react-use-cart";

import cartTotal from "../pages/orders"
 

export default function Payment(){

    const {
        isEmpty,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal
      } = useCart();

  const [method, setMethod] = useState("card");

  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  const [upi, setUpi] = useState("");

  function handlePayment(e){
    e.preventDefault();

    if(method === "card"){
      if(!card.number || !card.name || !card.expiry || !card.cvv){
        toast.error("Fill card details ❌");
        return;
      }
    }

    if(method === "upi"){
      if(!upi){
        toast.error("Enter UPI ID ❌");
        return;
      }
    }

    toast.success("Payment Successful ✅");
  }

  return(
    <div className="payment-container">

      {/* LEFT SIDE */}
      <div className="payment-box">

        <h2>Select Payment Method</h2>

        {/* TABS */}
        <div className="tabs">
          <button className={method==="card" ? "active" : ""} onClick={()=>setMethod("card")}>Card</button>
          <button className={method==="upi" ? "active" : ""} onClick={()=>setMethod("upi")}>UPI</button>
          <button className={method==="qr" ? "active" : ""} onClick={()=>setMethod("qr")}>QR</button>
          <button className={method==="cod" ? "active" : ""} onClick={()=>setMethod("cod")}>COD</button>
        </div>

        <form onSubmit={handlePayment}>

          {/* CARD */}
          {method === "card" && (
            <div className="card-box">

              <div className="card-preview">
                <p>{card.number || "**** **** **** 1234"}</p>
                <span>{card.name || "Card Holder"}</span>
              </div>

              <input placeholder="Card Number"
                onChange={(e)=>setCard({...card, number:e.target.value})} />

              <input placeholder="Card Holder Name"
                onChange={(e)=>setCard({...card, name:e.target.value})} />

              <div className="row">
                <input placeholder="MM/YY"
                  onChange={(e)=>setCard({...card, expiry:e.target.value})} />
                <input placeholder="CVV"
                  onChange={(e)=>setCard({...card, cvv:e.target.value})} />
              </div>

            </div>
          )}

          {/* UPI */}
          {method === "upi" && (
            <div className="upi-box">
              <input 
                placeholder="Enter UPI ID (example@upi)"
                onChange={(e)=>setUpi(e.target.value)}
              />
            </div>
          )}

          {/* QR */}
          {method === "qr" && (
            <div className="qr-box">
              <div className="qr-placeholder">QR CODE</div>
              <p>Scan & Pay using any UPI app</p>
            </div>
          )}

          {/* COD */}
          {method === "cod" && (
            <div className="cod-box">
              <p>Cash will be collected at delivery 🚚</p>
            </div>
          )}

          <button className="pay-btn">Pay Now</button>

        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="summary-box">
        <h3>Order Summary</h3>

        {/* <div className="summary-item">
          <span>Items</span>
          <span>₹1200</span>
        </div>

        <div className="summary-item">
          <span>Delivery</span>
          <span>₹50</span>
        </div> */}
<br />
<br />

        <div className="summary-item total">
          <span>Total :</span> &nbsp; &nbsp;
          <span> {cartTotal}</span>
        </div>

      </div>

    </div>
  )
}