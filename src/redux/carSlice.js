import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';
import { clearCars } from './operations';

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    adverts: [],
    favorites: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const uniqueAdverts = action.payload.filter(newAd => {
          return !state.adverts.some(existingAd => existingAd.id === newAd.id);
        });
        state.adverts = [...state.adverts, ...uniqueAdverts];
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(clearCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(clearCars.fulfilled, state => {
        state.isLoading = true;
        state.adverts = [];
      })
      .addCase(clearCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReducer = carSlice.reducer;
