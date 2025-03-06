 import { LOGO_URL } from "../utils/constants";
 import { useState,useEffect } from "react";
 import { Link } from "react-router-dom";
 export const Header = () => {
    const [btnName,setBtnName] = useState(["Login"]);
    useEffect(()=>{
        console.log("Header useEffect called");
    },[]);
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src= {LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <Link to = "/">Home</Link>
            </li>
            <li>
              <Link to = "/about">About</Link>
            </li>
            <li>
              <Link to = "contact">Contact</Link>
            </li>
            <li>Cart</li>
            <button className="login-btn" onClick={()=>{
            //     if(btnName ==="Login")
            //    setBtnName("Logout");
            // else
            //  setBtnName("Login");
            btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
              // logout logic here
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };