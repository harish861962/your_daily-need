import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Signup() {

    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[phone , setphone] = useState("");
    const[name , setname] = useState("")
    const [address , setaddress] = useState("")
    

    async function getUsers() {
        const res = await fetch("http://localhost:3000/SignUp");
        const data = await res.json();
        setUsers(data);
    }

    useEffect(() => {
        getUsers();
    }, []);

async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
        toast.warn("Enter email & password");
        return;
    }

    await fetch("http://localhost:3000/SignUp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email,
            password,
            phone,
            address,
            name
        })
    });

    toast.success("User Added");

    setEmail("");
    setPassword("");
    setphone("");
    setaddress("");
    setname("");

    getUsers();
}

    async function deleteUser(id) {
        await fetch(`http://localhost:3000/SignUp/${id}`, {
            method: "DELETE"
        });

        toast.success("Deleted ");
        getUsers();
    }

   

    return (
        <>
         <div className="signup-page">

    {/* LEFT SIDE */}
    <div className="signup-left">
      <h1>Welcome to ShopX</h1>
      <p>
        Create your account to explore amazing deals,
        track orders, and enjoy seamless shopping experience.
      </p>
    </div>

    {/* RIGHT SIDE */}
    <div className="signup-right">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <button type="submit">Create Account</button>

        <div className="form-footer">
          Already have an account? <span><Link to="/login">Login</Link></span>
        </div>
      </form>
    </div>

  </div>
        </>
    );
}