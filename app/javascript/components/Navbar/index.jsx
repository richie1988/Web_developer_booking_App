// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logoImage from '../../images/logo.jpg';
import Logout from '../Logout/index.jsx';
import "../../styles/App.css"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleSidebar}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div className='logo-app'>
      <img src={logoImage} alt="Logo" />
      </div>
      <div className="menu-items">
        <Link to="/developers" onClick={toggleSidebar}>Developers</Link>
        <Link to="/add-developers" onClick={toggleSidebar}>Add Developer</Link>
        <Link to="/delete-developer" onClick={toggleSidebar}>Delete Developer</Link>
        <Link to="/my-reservations" onClick={toggleSidebar}>My Reservations</Link>
        <Link to="/reservationForm" onClick={toggleSidebar}>Add Reservation</Link>
        <Logout />
      </div>
      <div className="social-icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        <FaLinkedin />
      </div>
    </div>
  );
};

export default Sidebar;