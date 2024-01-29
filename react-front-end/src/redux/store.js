// store.js
import { configureStore } from '@reduxjs/toolkit';
import {thunk }from 'redux-thunk';
import developersReducer from './reducer/DevelopersReducer';
import reservationsReducer from './reducer/ReservationsReducer';

const rootReducer = {
  developers: developersReducer,
  reservations: reservationsReducer,
  // Add other reducers here if needed
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
