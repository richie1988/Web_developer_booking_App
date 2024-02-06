import axios from 'axios';

export const CREATE_RESERVATION_SUCCESS = 'CREATE_RESERVATION_SUCCESS';
export const CREATE_RESERVATION_FAILURE = 'CREATE_RESERVATION_FAILURE';
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const SET_SELECTED_DURATION = 'SET_SELECTED_DURATION';
export const FETCH_RESERVATIONS_SUCCESS = 'FETCH_RESERVATIONS_SUCCESS';
export const FETCH_RESERVATIONS_FAILURE = 'FETCH_RESERVATIONS_FAILURE';

export const createReservation = (reservationData) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/v1/reservations', // Amend as required
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
    const response = await axios.get('http://localhost:3000/api/v1/reservations');
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
  }
};
