redux/slicers/reservationSlicer.js

import { createSlice } from '@reduxjs/toolkit';
import {
  fetchReservationsAsync,
  addReservationAsync,
  deleteReservationAsync,
} from '../actions/ReservationsActions';

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservationsAsync.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addReservationAsync.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteReservationAsync.fulfilled, (state, action) => {
        return state.filter((reservation) => reservation.id !== action.payload);
      });
  },
});

export default reservationsSlice.reducer;