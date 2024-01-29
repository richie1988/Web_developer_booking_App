import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DeveloperList from './components/DeveloperList';
import DeveloperDetails from './components/DeveloperDetails';
import ReserveForm from './components/ReserveForm';
import MyReservations from './components/MyReservations';
import AddDeveloperForm from './components/AddDeveloperForm';
import DeleteDeveloperList from './components/DeleteDeveloperList';
import LoginForm from './components/LoginForm';




function App() {
  return (
    <Router>
      <div className="App">
      <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/developersList">DeveloperList</Link></li>
            <li><Link to="/reserve">Reserve</Link></li>
            <li><Link to="/my-reservations">My Reservations</Link></li>
            <li><Link to="/add-developers">Add Developer</Link></li>
            <li><Link to="/delete-developers">Delete Developer</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <h1>React Front End</h1>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="developersList" element={<DeveloperList />} />
            <Route path="/developers/:id" element={<DeveloperDetails />} />
            <Route path="/reserve" element={<ReserveForm />} />
            <Route path="/my-reservations" element={<MyReservations />} />
            <Route path="/add-developers" element={<AddDeveloperForm />} />
            <Route path="/delete-developers" element={<DeleteDeveloperList />} />
            <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
