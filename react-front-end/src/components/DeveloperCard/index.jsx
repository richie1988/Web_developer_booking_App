import React from 'react';
import developerImage from '../../images/developer.jpg';
import '../../styles/developersDetails.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function DeveloperCard({ developer }) {
  return (
    <div className="developer-card">
      <div className="image-container">
        <img src={developerImage} alt="developer" />
      </div>
      <div className="info">
        <ul>
        <h2>Michael Brown</h2>
        <li>Phone: 0014245754</li>
        <li>Hourly Rate: 20</li>
        <li>City: losAngels</li>
        <li>Email: Moses@gmail.com</li>
        <li>APR:4.5</li>
        <Link to="/Skils">
        <button>Skills</button>
      </Link>
        </ul>
      </div>
      <Link to="/developers" className="back-button">
        <button>Back to Developers List</button>
      </Link>
    </div>
  );
}

export default DeveloperCard;