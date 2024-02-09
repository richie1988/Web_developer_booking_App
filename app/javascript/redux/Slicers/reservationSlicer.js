import { createSlice } from '@reduxjs/toolkit';
import { fetchReservationsAsync, addReservationAsync, deleteReservationAsync } from '../actions/ReservationsActions';

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: [],
  reducers: {
    fetchReservations: (state, action) => {
      return action.payload;
    },
    addReservation: (state, action) => {
      state.push(action.payload);
    },
    deleteReservation: (state, action) => {
      const index = state.findIndex(reservation => reservation.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservationsAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addReservationAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteReservationAsync.fulfilled, (state, action) => {
        const index = state.findIndex(reservation => reservation.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      });
  },
});

export const { fetchReservations, addReservation, deleteReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;
