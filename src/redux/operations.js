import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://65beed59dcfcce42a6f30053.mockapi.io/api';

export const getAllCars = createAsyncThunk('cars/getAll', async (params, thunkAPI) => {
  try {
    const response = await axios.get('/adverts', { params });
    return response.data;
  } catch (error) {
    const errorText = `${error.request.status}|${error.request.statusText}! ${error.message}`;
    return thunkAPI.rejectWithValue(errorText);
  }
});

export const clearCars = createAsyncThunk('cars/clearAll', async (params, thunkAPI) => {
  return {};
});

// export const addToFavorites = createAsyncThunk('cars/toFavorites', async (id, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const carToAdd = state.cars.adverts.find(ad => ad.id === id);
//   if (carToAdd) {
//     thunkAPI.dispatch(carsSlice.actions.addToFavorites(carToAdd));
//   }
// });

// export const removeFromFavorites = createAsyncThunk('cars/fromFavorites', async (id, thunkAPI) => {
//   const state = thunkAPI.getState();
//   const indexToRemove = state.cars.favorites.findIndex(ad => ad.id === id);
//   if (indexToRemove !== -1) {
//     thunkAPI.dispatch(carsSlice.actions.removeFromFavorites(indexToRemove));
//   }
// });
