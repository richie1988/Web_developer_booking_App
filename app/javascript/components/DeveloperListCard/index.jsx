// DeveloperCardList.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import developerImage from '../../images/developer.jpg';
import '../../styles/developersList.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import axios from 'axios';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

function DeveloperCardList() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    // Fetch developers from your API
    const fetchDevelopers = async () => {
      const headers = {
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }
      try {
        console.log('Fetching developers...');
        const response = await axios.get('/api/web_developers', {headers: headers});
        setDevelopers(response.data);
        console.log('Developers fetched successfully:', response.data);
      } catch (error) {
        console.error('Error fetching developers:', error.message);
      }
    };
    

    fetchDevelopers();
  }, []);

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const developersChunks = chunkArray(developers, 3);

  return (
    <Carousel interval={null}>
      {developersChunks.map((chunk, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-around colorsel-container">
            {chunk.map((developer, i) => (
              <div key={i} className="developer-list-card" style={{ cursor: "pointer" }}>
                <Link to={`/developerDetails/${developer.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={developer.image_url} alt="developer" />
                    <div className="card-body">
                      <h2>{developer.name}</h2>
                      <hr className="dotted-line" />
                      <p>{developer.description}</p>
                    </div>
                    <div className="card-body">
                        <a href={developer.github_url} className="card-link">
                          <FaGithub />
                        </a>
                        <a href={developer.linkedin_url} className="card-link">
                          <FaLinkedin />
                        </a>
                        <a href={developer.twitter_url} className="card-link">
                          <FaTwitter />
                        </a>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default DeveloperCardList;
