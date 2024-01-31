// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DeveloperList from './components/DeveloperList';
import DeveloperDetails from './components/DeveloperDetails';
import ReservationForm from './components/ReservationForm';
import MyReservations from './components/MyReservations';
import AddDeveloperForm from './components/AddDeveloperForm';
import DeleteDeveloperList from './components/DeleteDeveloperList';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} /> */}
        <Route path="/Home" element={<HomePage />} />
        <Route path='/*' element={
          <div>
            {/* <LandingPage /> */}
            <div className="content-container">
            <nav className="navbar">
            <Link to="/developersList">Home</Link>
            <Link to="/developerDetails">DevelopersDetails</Link>
            <Link to="/Signup">Signup</Link>
            <Link to="/developersList">Developers</Link>
            <Link to="/add-developers">Add Developer</Link>
            <Link to="/my-reservations">My Reservations</Link>
    </nav>
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="/developersList" element={<DeveloperList />} />
                <Route path="/add-developers" element={<AddDeveloperForm />} />
                <Route path="/delete-developer/:id" element={<DeleteDeveloperList />} />
                <Route path="/developerDetails" element={<DeveloperDetails />} />
                <Route path="/reservationForm" element={<ReservationForm />} />
                <Route path="/my-reservations" element={<MyReservations />} />
              </Routes>
            </div>
            </div>
        } />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
