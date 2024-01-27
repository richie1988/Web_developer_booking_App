import React from 'react';
import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ItemList from './components/ItemList';
import ItemDetails from './components/ItemDetails';
import ReserveForm from './components/ReserveForm';
import MyReservations from './components/MyReservations';
import AddItemForm from './components/AddItemForm';
import DeleteItemList from './components/DeleteItemList';
import LoginForm from './components/LoginForm';
import LandingPage from '../assets/stylesheets/LandingPage.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/homepage" element={<Home />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/itemList/:id" element={<ItemList />} />
                <Route path="/item/:id" element={<ItemDetails />} />
                <Route path="/reserve" element={<ReserveForm />} />
                <Route path="/my-reservations" element={<MyReservations />} />
                <Route path="/add-item" element={<AddItemForm />} />
                <Route path="/delete-item" element={<DeleteItemList />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;