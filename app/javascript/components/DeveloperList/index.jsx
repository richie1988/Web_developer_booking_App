// DeveloperList/index.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWebDevelopers } from '../../redux/actions/DevelopersActions';
import { Link } from 'react-router-dom';

function DeveloperList() {
  const dispatch = useDispatch();
  const developers = useSelector((state) => state.developers.webDevelopers);

  useEffect(() => {
    dispatch(fetchWebDevelopers());
  }, [dispatch]);

  return (
    <div>
      <h1>Developer List</h1>
      <ul>
        {developers.map((developer) => (
          <li key={developer.id}>
            <Link to={`/developer/${developer.id}`}>
              {developer.fullName} - {developer.city}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeveloperList;
