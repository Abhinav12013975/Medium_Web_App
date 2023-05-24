import React, { useEffect } from "react";
import "./Navbar.css";
import {  useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isAboutUsPage = window.location.href.includes("write");
  const isMembershipPage = window.location.href.includes("membership");
  const isOurStoryPage = window.location.href.includes("ourstory");
const location=useLocation();
  useEffect(()=>{
    if(location.pathname === "/"){
      navigate("/home")
    }
  })

  return (
    <div className={`main-container ${isAboutUsPage && "navbar_about_us"} ${isMembershipPage && "membership_color_change"} ${isOurStoryPage && "story-navbar"}`}>
      <div className="inside-container">
        <div className="navbar-nav">
          <div className="medium">
            <span  className={`${isMembershipPage && "membership_color"}`}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968854.png"
                alt=""
               
              />
            </span>
            <span>
              <h1>Medium</h1>
            </span>
          </div>
          <div className="left_navbar">
            <span
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </span>
            <span
              onClick={() => {
                navigate("/ourstory");
              }}
            >
              Our story
            </span>
            <span
              onClick={() => {
                navigate("/membership");
              }}
            >
              Membership
            </span>
            <span
              onClick={() => {
                navigate("/write");
              }}
            >
              Write
            </span>
            <span
              // onClick={() => {
              //   navigate("/signin");
               
              // }}
            >
               <a href="https://medium.com/m/signin" target="_blank"  rel="noreferrer" style={{textDecoration: "none",color:"#000000"}}><p className={`${isMembershipPage && "anchor-color"}`}>Sign In</p></a>
            </span>
            <span>
              <a href="https://medium.com/m/signin" style={{textDecoration:"none"}}><button>Get started</button> </a>
          
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
