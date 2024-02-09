import { createAsyncThunk } from '@reduxjs/toolkit';
import testEnpoint from '../../services/homeService';


const initialState = {
    content: "loading..."
};

const home = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default home;