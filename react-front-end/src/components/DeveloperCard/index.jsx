import React from 'react';
import developerImage from '../../images/developer.jpg';
import '../../styles/developersDetails.css';
import { Link } from 'react-router-dom';
import developerData from '../testingData'; // Adjust the path as needed
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillsModal from '../SkillsModal'; 

function DeveloperCard() {
  const developer = developerData[0]; // Choose a developer from the array

  const skillsProgress = developer.skills ? developer.skills.length * 20 : 0;


  return (
    <div className="developer-card">
      <div className="image-container">
        <img src={developerImage} alt="developer" />
      </div>
      <div className="info">
        <ul>
          <h2>{developer.name}</h2>
          <li>Phone: {developer.phoneNumber}</li>
          <li>Hourly Rate: {developer.hourlyRate}</li>
          <li>City: {developer.city}</li>
          <li>Email: {developer.email}</li>
          <li>APR: {developer.apr}</li>
          <li>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#skillsModal">
              View Skills
            </button>
            <div className="developer-progress-container">
            <div className="developer-progress-bar" style={{ width: `${skillsProgress}%` }}>
              <div className="developer-progress-text">{skillsProgress}%</div>
            </div>
          </div>
          </li>
          <Link to={`/config/${developer.id}`}>
            <button className="btn btn-warning"><i class="fa fa-cog"></i> Settings</button>
          </Link>
        </ul>
        <SkillsModal skills={developer.skills} />
      </div>
      <Link to="/developers" className="back-button">
        <button type="button" class="btn btn-success"><i class="fa fa-chevron-left" aria-hidden="true">Back</i></button>
      </Link>
    </div>
  );
}

export default DeveloperCard;
