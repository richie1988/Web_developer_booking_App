// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DeveloperList from './components/DeveloperList';
import DeveloperDetails from './components/DeveloperDetails';
import ReservationForm from './components/ReservationForm';
import MyReservations from './components/MyReservations';
import AddDeveloperForm from './components/AddDeveloperForm';
import DeleteDeveloperList from './components/DeleteDeveloperList';
import Home from './components/Home';
import Navbar from './components/NavBar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <div>
        <div className="App">
          <h1>React Front End</h1>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/developersList" element={<DeveloperList />} />
            <Route path="/add-developers" element={<AddDeveloperForm />} />
            <Route path="/delete-developer/:id" element={<DeleteDeveloperList />} />
            <Route path="/developer/:id" element={<DeveloperDetails />} />
            <Route path="/reservationForm" element={<ReservationForm />} />
            <Route path="/my-reservations" element={<MyReservations />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
