// myReservationActions.js

import axios from 'axios';

export const ADD_RESERVATION_SUCCESS = 'ADD_RESERVATION_SUCCESS';
export const ADD_RESERVATION_FAILURE = 'ADD_RESERVATION_FAILURE';

export const addReservation = (reservationData) => async (dispatch) => {
  try {
    const response = await axios.post('http://127.0.0.1:3000/api/v1/reservations', reservationData);
    
    dispatch({
      type: ADD_RESERVATION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error adding reservation:', error);
    
    dispatch({
      type: ADD_RESERVATION_FAILURE,
      payload: 'Error adding reservation.',
    });
  }
};
