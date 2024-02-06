// App.jsx
import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import WelcomePage from './components/WelcomePage/index.jsx';
import Developers from './components/DeveloperListCard/index.jsx';
import DeveloperDetails from './components/DeveloperDetails/index.jsx';
import ReservationForm from './components/ReservationForm/index.jsx';
import MyReservations from './components/MyReservations/index.jsx';
import AddDeveloperForm from './components/AddDeveloperForm/index.jsx';
import DeleteDeveloperList from './components/DeleteDeveloperList/index.jsx';
import HomePage from './components/HomePage/index.jsx';
import Login from './components/Login/index.jsx';
import Signup from './components/Signup/index.jsx';
import Navbar from './components/NavbarDemo/index.jsx';

function App() {
  return (
    <Provider store={store}>
        <Router>
        <div className="App">
            <Routes>
            {/*<Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<WelcomePage />} />*/}
            <Route
                path="/*"
                element={
                <div>
                <Navbar />
                    <div className="content-container">
                    <Routes>
                        <Route index element={<HomePage />} />
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
    </Provider>
  );
}

export default App;