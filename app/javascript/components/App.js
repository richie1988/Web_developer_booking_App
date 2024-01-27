import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import store from '../redux/configureStore';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact="true" path="/" element={<Home />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;