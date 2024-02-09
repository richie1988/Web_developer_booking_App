import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../baseURL';

export const fetchReservationsAsync = createAsyncThunk(
  'reservations/fetchReservations',
  async (_, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().auth.token;
      if (!authToken) {
        return rejectWithValue('No authentication token found');
      }

      const response = await api.get('http://localhost:3000/api/reservations', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addReservationAsync = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().auth.token;
      const response = await api.post('http://localhost:3000/api/new-reservation', reservationData, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const deleteReservationAsync = createAsyncThunk(
  'reservations/deleteReservation',
  async (reservationId, { rejectWithValue, getState }) => {
    try {
      const authToken = getState().auth.token;
      await api.delete(`http://localhost:3000/api/reservation/delete/${reservationId}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      return reservationId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);