redux/store.js

// store.js
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import developersReducer from './Slicers/developerSlicer';
import authenticationReducer from './Auth/AuthSlicer';
import skillsReducer from './Slicers/skillsSlicer';
import reservationsReducer from './Slicers/reservationSlicer';
// import {
//   fetchReservationsAsync,
//   addReservationAsync,
//   deleteReservationAsync,
// } from './actions/ReservationsActions';

const rootReducer = {
  developers: developersReducer,
  reservations: reservationsReducer,
  authentication: authenticationReducer,
  skills: skillsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;