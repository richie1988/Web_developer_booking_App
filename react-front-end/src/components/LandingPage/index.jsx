// LandingPage.js
import React from 'react';
import '../../styles/LandingPage.css';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image">
        {/* Place your background image here */}
      </div>
      <div className="content">
        <h1>Welcome to Book a Web Developer App!</h1>
        <p>Make your business grow. Explore and enjoy!</p>
        <div className="buttons">
          <button className="explore-button">Explore</button>
          <button className="book-button">Book</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
