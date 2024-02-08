// reservationsActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../baseURL';

export const fetchReservationsAsync = createAsyncThunk(
  'reservations/fetchReservations',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/api/reservations');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addReservationAsync = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData, { rejectWithValue }) => {
    try {
      const response = await api.post('/api/new-reservation', reservationData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteReservationAsync = createAsyncThunk(
  'reservations/deleteReservation',
  async (reservationId, { rejectWithValue }) => {
    try {
      await api.delete(`/api/reservation/delete/${reservationId}`);
      return reservationId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);