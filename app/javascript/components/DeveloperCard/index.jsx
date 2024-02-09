import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeveloper } from '../../redux/actions/DevelopersActions';
import { Link } from 'react-router-dom';


import developerImage from '../../images/developer.jpg';
import '../../styles/developersDetails.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SkillsModal from '../SkillsModal';
import axios from 'axios';

function DeveloperCard(props) {
  const dispatch = useDispatch();
  const developerId = props.match;
  const [developer, setDeveloper] = useState({});
  //const developer = useSelector((state) => state.developers.selectedDeveloper);
  const [loading, setLoading] = useState(false);
  //const loading = useSelector((state) => state.developers.loading);
  const [error, setError] = useState('');
  //const error = useSelector((state) => state.developers.error);

  useEffect(() => {
    const headers = {
      'Authorization': 'Bearer '+localStorage.getItem('token')
    }
    const fetchDeveloper = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/web_developers/${developerId}`, {headers: headers});
        setDeveloper(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching developer', error);
        setError('Error fetching developer');
      }
    };

    fetchDeveloper();
  }, [developerId]);

  /*if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }*/

  //const skillsProgress = developer.skills ? developer.skills.length * 20 : 0;

  return (
    <div className="developer-card">
      <div className="image-container">
        <img src={developer.image_url} alt="developer" />
      </div>
      <div className="info">
        <ul>
          <h2>{developer.name}</h2>
          <li>Phone: {developer.phoneNumber}</li>
          <li>Hourly Rate: {developer.hourlyRate}</li>
          <li>City: {developer.city}</li>
          <li>Email: {developer.email}</li>
          <li>{developer.apr}% Representative</li>
          <li>
            <button
              type="button"
              className="btn btn-primary view-skills-btn"
              data-bs-toggle="modal"
              data-bs-target="#skillsModal"
            >
              View Skills
            </button>
            <div className="developer-progress-container">
              <div className="developer-progress-bar" style={{ width: `${developer.skills ? developer.skills.length * 20 : 0}%` }}>
                <div className="developer-progress-text">{developer.skills ? developer.skills.length * 20 : 0}%</div>
              </div>
            </div>
          </li>
          <Link to={`/config/${developer.id}`} className="setting-btn">
            <button className="btn btn-warning reserve-btn">
              <i className="fa fa-cog"></i> Reserve <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
            </button>
          </Link>
        </ul>
        {/*<SkillsModal skills={developer.skills} />*/}
      </div>
      <Link to="/developers" className="back-button">
        <button type="button" className="btn btn-success back-buttonn">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
      </Link>
    </div>
  );
}

export default DeveloperCard;
