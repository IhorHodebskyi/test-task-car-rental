import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://654bd9925b38a59f28efcd82.mockapi.io';

export const fetchCars = createAsyncThunk(
  'advert/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/advert');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
