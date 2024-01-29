// Home.jsx
import React from 'react';
import '../../styles/LandingPage.css';

function Home() {
  return (
    <div className="landing-page">
      <div className="background-image">
        {/* This is the place for background image */}
      </div>
      <div className="content">
        <h1>Welcome to Book a Web Developer App!</h1>
        <div className="buttons">
          <button className="explore-button">Login</button>
          <button className="book-button">Signup</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
