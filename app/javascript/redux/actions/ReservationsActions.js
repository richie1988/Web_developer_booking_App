redux/actions/ReservationsActions.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../baseURL';

export const fetchReservationsAsync = createAsyncThunk(
  'reservations/fetchReservations',
  async (_, { getState, rejectWithValue }) => {
    try {
      const response = await api.get('/api/reservations', {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
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
  async (reservationData, { getState, rejectWithValue }) => {
    try {
      const response = await api.post('/api/new-reservation', reservationData, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteReservationAsync = createAsyncThunk(
  'reservations/deleteReservation',
  async (reservationId, { getState, rejectWithValue }) => {
    try {
      await api.delete(`/api/reservation/delete/${reservationId}`, {
        headers: {
          Authorization: `Bearer ${getState().auth.token}`,
        },
      });
      return reservationId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);