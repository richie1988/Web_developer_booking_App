// DeveloperDetails.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

function DeveloperDetails() {
  const { id } = useParams();
  const developer = useSelector((state) => state.developers.find((dev) => dev.id === parseInt(id)));

  if (!developer) {
    return <div>Developer not found</div>;
  }

  return (
    <div>
      <h1>Developer Details Page</h1>
      <p>
        <strong>Name:</strong> {developer.fullName}
      </p>
      {/* Add other developer details */}
      <Link to="/developers">
        <button>Back to Developers List</button>
      </Link>
    </div>
  );
}

export default DeveloperDetails;
