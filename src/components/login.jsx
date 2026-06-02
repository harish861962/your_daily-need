// import React, { useEffect, useState } from "react";
// import { toast } from 'react-toastify';
// import Header from "./header";
// import { Routes , Route , Link, useNavigate} from 'react-router-dom'
// import App from "../App";


// export default function Login(){
// const [email , setemail] = useState("")
// const [password , setpassword] = useState("")
// const navigate = useNavigate();
// const [islogin ,setislogin] = useState(false)


// //  const usercheck = localStorage.getItem("userid")
// // if(usercheck){
// //   navigate("/header")
// // }

// const  handleEmail=(e)=> {
// setemail(e.target.value)
// }
// const  handlepassword=(e)=> {
// setpassword(e.target.value)
// }

   

// async function handlelogin(e){
//   e.preventDefault();

//   if(username === "" || password === ""){
//     toast.error("Please enter valid details ❌");
//     return;
//   }

//   try {
//     const res = await fetch("http://localhost:3000/users");

//     if(!res.ok){
//       throw new Error("Network error");
//     }

//     const users = await res.json();

//     const validUser = users.find(
//       (user) => user.email.toLowerCase() === email.trim().toLowerCase() &&
//     user.password === password.trim()
//     );

//     if(validUser){
//       toast.success("Login Successful ✅");
//       // localStorage.setItem("userid", user.id)

//       setTimeout(() => {
//        setislogin(true);
//       },5000);

//     } else {
//       toast.error("Invalid username or password ❌");
//     }

//   } 
//   catch (error) {
//     console.log(error);
//     toast.error("Server error ❌");
//   }
// }
// if (islogin) {
//     return <App/>;
//   }






// return (
// <>
// <div className="login-div">
//     <div className="main-div">
// <h2>Login</h2>
// <h5>Don't have an account <span><Link to="/signup">?Create Account</Link> </span> </h5>
// <input type="text" name="" id="username"  placeholder="enter username" onChange={handleEmail} />
// <br />
// <input type="password" name="" id="password"  placeholder="enter password" onChange={handlepassword}/>
// <br />
// <div className="buttons">
// <a href="#">Forgot your password?</a>
// <br />
// <Link to="/signup">Signup</Link> 
// <br />
// </div>
// <button className="login-btn" onClick={handlelogin}>Login</button>

// <h3>Login With</h3>
// <div className="icons">
// <a href="#" ><i className="fa fa-user"></i></a>
// <a href="#" className="fa fa-message"></a>
// <a href="#" className="fa fa-link"></a>
// </div>
// </div>
// </div>


// </>
// )
// }





import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {

  const userId = localStorage.getItem("userid");

  if(userId){
    navigate("/header");
  }

}, []);

  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  async function handlelogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("Please enter valid details ❌");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/users");

      const users = await res.json();

      const validUser = users.find(
        (user) =>
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === password
      );

      if (validUser) {

        // Save login in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify(validUser)
        );

        toast.success("Login Successful ✅");
localStorage.setItem("userid", validUser.id);
localStorage.setItem("username", validUser.name);
        setTimeout(() => {
          navigate("/header");
        }, 1000);

      } else {
        toast.error("Invalid Email or Password ❌");
      }

    } catch (error) {
      console.log(error);
      toast.error("Server Error ❌");
    }
  }

  return (
    <>
      <div className="login-div">
        <div className="main-div">

          <h2>Login</h2>

          <h5>
            Don't have an account ?
            <span>
              <Link to="/signup"> Create Account</Link>
            </span>
          </h5>

          <input
            type="email"
            placeholder="Enter Email"
            onChange={handleEmail}
          />

          <br />

          <input
            type="password"
            placeholder="Enter Password"
            onChange={handlepassword}
          />

          <br />

          <button
            className="login-btn"
            onClick={handlelogin}
          >
            Login
          </button>

        </div>
      </div>
    </>
  );
}