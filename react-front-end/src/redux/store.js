// store.js
import { configureStore } from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import developersReducer from './reducer/DevelopersReducer';
import reservationsReducer from './reducer/ReservationsReducer';
import authenticationReducer from './Auth/AuthSlicer';
import skillsReducer from '../redux/Slicers/SkillsSlice';

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