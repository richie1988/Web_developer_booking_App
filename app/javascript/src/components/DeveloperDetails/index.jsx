// src/components/DeveloperDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import DeveloperCard from '../DeveloperCard';
import axios from 'axios';

const DeveloperDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [developer, setDeveloper] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDeveloper = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/web_developers/${id}`);
        setDeveloper(response.data);
      } catch (error) {
        console.error('Error fetching developer', error);
        setError('Error fetching developer');
      }
    };

    fetchDeveloper();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/web_developers/${id}`);
      navigate('/developers');
    } catch (error) {
      console.error('Error deleting developer', error);
      setError('Error deleting developer');
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!developer) {
    return <div>Loading... <DeveloperCard /></div>;
  }

  return (
    <div>
      <h2>{developer.fullName}</h2>
      {/* Display other developer information as needed */}
      <Link to={`/developers/${id}/edit`}>Edit Developer</Link>
      <button onClick={handleDelete}>Delete Developer</button>
    </div>
  );
};

export default DeveloperDetail;
