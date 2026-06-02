
import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function App() {

  const [search, setSearch] = useState("");

  const orders = [
    { id: 1, customer: "Rahul", amount: "₹500", status: "Delivered" },
    { id: 2, customer: "Aman", amount: "₹800", status: "Pending" },
    { id: 3, customer: "Neha", amount: "₹1200", status: "Cancelled" },
    { id: 4, customer: "Riya", amount: "₹2200", status: "Delivered" },
  ];

  

  const filteredOrders = orders.filter((item) =>
    item.customer.toLowerCase().includes(search.toLowerCase()) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">ShopAdmin</h2>
        <ul>
          <Link style={{textDecoration:"none", color:"white"}} to=""><li>🏠 Dashboard </li></Link>
          <Link style={{textDecoration:"none", color:"white"}} to="/userdetails"><li>👤Users</li></Link>
          <Link style={{textDecoration:"none", color:"white"}} to="/Products"><li>📦 Products</li></Link>
          <Link style={{textDecoration:"none", color:"white"}} to="/Orders"><li>🛒 Orders</li></Link>
          <Link style={{textDecoration:"none", color:"white"}} to="/Reports"><li>📊 Reports</li></Link>
          <Link style={{textDecoration:"none", color:"white"}} to="/Settings"><li> ⚙️ Settings</li></Link>
                                  
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">

        {/* Header */}
        <div className="header">
          <input
            type="text"
            placeholder="Search by name or status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className="profile">
           <a href="header"> <Link style={{textDecoration:"none"}} to="/header">Home</Link></a>
            <Link style={{textDecoration:"none", color:"black", fontWeight:900}} to="/signup">Signup</Link>
            <img src="https://i.pravatar.cc/40" alt="profile" />
          
          </div>
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="card">
            <h4>Total Sales</h4>
            <h2>₹25,000</h2>
          </div>

          <div className="dashboard-card">
            <h4>Orders</h4>
            <h2>{orders.length}</h2>
          </div>

          <div className="card">
            <h4>Customers</h4>
            <h2>80</h2>
          </div>

          <div className="card">
            <h4>Products</h4>
            <h2>45</h2>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <h3>Recent Orders</h3>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.length > 0 ? (
                filteredOrders.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.customer}</td>
                    <td>{item.amount}</td>
                    <td className={item.status.toLowerCase()}>
                      {item.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}