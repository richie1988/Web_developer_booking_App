// Home.jsx
import React from 'react';
import '../../styles/homePage.css';
// import Logout from '../Logout/index.jsx';

function Home() {
  return (
    <div className="landing-page">
      {/* <Logout /> */}
      <div className="background-image">
        {/* This is the place for background image */}
      </div>
      <div className="content">
        <h1>Welcome to Book a Web Developer App!</h1>
        <p>Make your business grow. Explore and enjoy!</p>
      </div>
    </div>
  );
}

export default Home;
