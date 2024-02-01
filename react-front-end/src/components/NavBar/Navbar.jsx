import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaVimeoV, FaPinterestP } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { TiSocialGooglePlus } from "react-icons/ti";
import "./Navbar.css";

function Navbar() {
  return (
    <>
    <div container-Navbar>
      <div className="header">
        <h1 className="heading-title">Web Developer</h1>
        <img className="logo-icon" src="https://th.bing.com/th/id/OIG2.Hbqrl5bmcns7SUQpbFgH?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
        </div>
        <div className="links-navbar">
        <Link to="/LandingPage">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Signup">Sign Up</Link> 
      </div>
      <div className="footer">
          <FaTwitter/>
          <FaFacebookF/>
          <TiSocialGooglePlus/>
          <FaVimeoV/>
          <FaPinterestP/>
      </div>
      </div>
    </>
  )
}

export default Navbar
