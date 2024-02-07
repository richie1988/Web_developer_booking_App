<<<<<<< HEAD
import axios from 'axios';
=======
// ReservationsActions.js
import axiosInstance from '../../components/baseURL';
>>>>>>> ea291643ac72b0f48ff1016c97143b2394f64718

export const CREATE_RESERVATION_SUCCESS = 'CREATE_RESERVATION_SUCCESS';
export const CREATE_RESERVATION_FAILURE = 'CREATE_RESERVATION_FAILURE';
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const SET_SELECTED_DURATION = 'SET_SELECTED_DURATION';
export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
export const FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE';

export const createReservation = (reservationData) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/reservations', // Amend as required
      { reservation: reservationData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    dispatch({
      type: CREATE_RESERVATION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    if (error.response) {
      console.error('Error Response:', error.response.data);
      dispatch({
        type: CREATE_RESERVATION_FAILURE,
        payload: error.response.data,
      });
    } else {
      console.error('Unexpected Error:', error.message);
      dispatch({
        type: CREATE_RESERVATION_FAILURE,
        payload: 'An unexpected error occurred.',
      });
    }
  }
};

export const setSelectedDate = (date) => ({
  type: SET_SELECTED_DATE,
  payload: date,
});

export const setSelectedDuration = (duration) => ({
  type: SET_SELECTED_DURATION,
  payload: duration,
});

export const fetchReservations = () => async (dispatch) => {
  try {
<<<<<<< HEAD
    const response = await axios.get('http://localhost:3000/api/reservations');
    dispatch({
      type: FETCH_RESERVATIONS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error('Error fetching reservations:', error);
    dispatch({
      type: FETCH_RESERVATIONS_FAILURE,
      payload: 'Error fetching reservations.',
    });
=======
    const response = axiosInstance.get('/reservations');
    dispatch({ type: 'FETCH_RESERVATIONS', payload: response.data });
  } catch (error) {
    console.error('Error fetching reservations:', error.message);
  }
};

export const addReservation = (reservation) => async (dispatch) => {
  try {
    const response = axiosInstance.post('/reservations', reservation);
    dispatch({ type: 'ADD_RESERVATION', payload: response.data });
  } catch (error) {
    console.error('Error adding reservation:', error.message);
  }
};

export const deleteReservation = (id) => async (dispatch) => {
  try {
    axiosInstance.delete(`/reservations/${id}`);
    dispatch({ type: 'DELETE_RESERVATION', payload: id });
  } catch (error) {
    console.error('Error deleting reservation:', error.message);
>>>>>>> ea291643ac72b0f48ff1016c97143b2394f64718
  }
};
