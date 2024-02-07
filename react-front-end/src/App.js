// App.jsx
import React from 'react';
import '../../components/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import Developers from './components/DeveloperListCard';
import DeveloperDetails from './components/DeveloperDetails';
import ReservationForm from './components/ReservationForm';
import MyReservations from './components/MyReservations';
import AddDeveloperForm from './components/AddDeveloperForm';
import DeleteDeveloperList from './components/DeleteDeveloperList';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/*"
            element={
              <div>
              <Navbar />
                <div className="content-container">
                  <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/developers" element={<Developers />} />
                    <Route path="/add-developers" element={<AddDeveloperForm />} />
                    <Route
                      path="/delete-developer/:id"
                      element={<DeleteDeveloperList />}
                    />
                    <Route path="/developerDetails" element={<DeveloperDetails />} />
                    <Route path="/reservationForm" element={<ReservationForm />} />
                    <Route
                      path="/my-reservations"
                      element={<MyReservations />}
                    />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
