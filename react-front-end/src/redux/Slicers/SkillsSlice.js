// SkillsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../components/baseURL';

// Async actions
export const fetchSkills = createAsyncThunk(
  'skills/fetchSkills',
  async () => {
    const response =  axiosInstance.get('/skills');
    return response.data;
  }
);

// Slice
const skillsSlice = createSlice({
  name: 'skills',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkills.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSkills.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchSkills.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default skillsSlice.reducer;