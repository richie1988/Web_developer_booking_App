import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/LandingPage.css';

const WelcomePage = () => (
  <div className="welcome-container">
    <h3 className="welcome-title">
      WELCOME TO BOOK A WEB DEVELOPER APP
    </h3>
    <div className="button-container">
      <Link to="/signup" className="signup-button">
        Sign Up
      </Link>
      <Link to="/login" className="signin-button">
        Login
      </Link>
    </div>
  </div>
);

export default WelcomePage;
