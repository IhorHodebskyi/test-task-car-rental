import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { fetchCars } from './operations';
import {
  handleFulfilled,
  handleFulfilledCars,
  handlePending,
  handleRejected,
} from './handlers';

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  extraReducers: builder =>
    builder
      .addCase(fetchCars.fulfilled, handleFulfilledCars)
      .addMatcher(action => action.type.endsWith('/fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected),
});

export const carsReducer = carsSlice.reducer;
