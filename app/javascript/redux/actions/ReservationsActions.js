// ReservationsActions.js
import axiosInstance from '../../baseURL';

export const fetchReservations = () => async (dispatch) => {
  try {
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
  }
};
