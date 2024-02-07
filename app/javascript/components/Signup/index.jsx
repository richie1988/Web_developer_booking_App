import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if name is empty
    if (name.trim() === '') {
      setError("Name can't be blank");
      return;
    }

    const dataToSend = {
      username: name,
    };

    axios.post(
      'http://localhost:3000/api/register',
      dataToSend,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    )      
    .then(response => {
      console.log('Response:', response.data);
      navigate('/Homepage');

      // Reset form fields
      setName('');
      setError('');
    })
    .catch(error => {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message[0]
      ) {
        setError(error.response.data.message[0]);
      } else {
        setError('An error occurred');
      }
    });
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-12">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Name"
              />
              {error && <div className="alert alert-danger mt-2">{error}</div>}
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
