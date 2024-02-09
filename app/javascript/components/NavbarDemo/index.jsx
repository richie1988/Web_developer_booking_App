// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logoImage from '../../images/logo.jpg';
import Logout from '../Logout/index.jsx';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div>
      <img className="logo-img" src={logoImage} alt="logo" />
      </div>
      <div className="menu-toggle" onClick={toggleSidebar}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
      <div>
      <img src={logoImage} alt="Logo" />
      </div>
      <div className="menu-items">
        <Link to="/developers" onClick={toggleSidebar}>Developers</Link>
        <Link to="/add-developers" onClick={toggleSidebar}>Add Developer</Link>
        <Link to="/delete-developer" onClick={toggleSidebar}>Delete Developer</Link>
        <Link to="/my-reservations" onClick={toggleSidebar}>My Reservations</Link>
        <Link to="/add-reservation" onClick={toggleSidebar}>Add Reservation</Link>
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