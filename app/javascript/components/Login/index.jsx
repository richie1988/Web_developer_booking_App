import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '../../redux/Auth/AuthSlicer';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    
    if (!username) {
      setError('Username is required');
      return;
    }

    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: { username } }),
    })
      .then((response) => {
        console.log(response);
        let token = response.token;
        localStorage.setItem('token', token);
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong, try again later');
        }
      })
      .then((user) => {
        dispatch(loginSuccess({ user }));
        navigate('/Home');
      })
      .catch((error) => {
        dispatch(loginFailure());
        setError('An error occurred, please try again later');
      });
  };

  return (
    <div className="container">
      <div className="card mt-5">
        <div className="card-body">
          <form onSubmit={handleLogin} className="row g-3">
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="col-12">
              {error && <div className="alert alert-danger mt-2">{error}</div>}
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
