import { createSlice } from '@reduxjs/toolkit';

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
      return state.filter((reservation) => reservation.id !== action.payload);
    },
  },
});

export const { fetchReservations, addReservation, deleteReservation } = reservationsSlice.actions;

export default reservationsSlice.reducer;