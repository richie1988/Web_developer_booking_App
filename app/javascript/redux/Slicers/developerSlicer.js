import { createSlice } from '@reduxjs/toolkit';

const developersSlice = createSlice({
  name: 'developers',
  initialState: {
    developers: [],
    selectedDeveloper: null,
  },
  reducers: {
    fetchDevelopers: (state, action) => {
      state.developers = action.payload;
    },
    addDeveloper: (state, action) => {
      state.developers.push(action.payload);
    },
    deleteDeveloper: (state, action) => {
      state.developers = state.developers.filter((dev) => dev.id !== action.payload);
    },
    fetchWebDeveloper: (state, action) => {
      state.selectedDeveloper = action.payload;
    },
    updateWebDeveloper: (state, action) => {
      state.developers = state.developers.map((dev) =>
        dev.id === action.payload.id ? action.payload : dev
      );
      state.selectedDeveloper = action.payload;
    },
    deleteWebDeveloper: (state, action) => {
      state.developers = state.developers.filter((dev) => dev.id !== action.payload);
      state.selectedDeveloper = null;
    },
  },
});

export const { fetchDevelopers, addDeveloper, deleteDeveloper, fetchWebDeveloper, updateWebDeveloper, deleteWebDeveloper } = developersSlice.actions;

export default developersSlice.reducer;