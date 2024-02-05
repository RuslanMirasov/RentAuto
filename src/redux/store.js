//https://65beed59dcfcce42a6f30053.mockapi.io/api/adverts
import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from '../redux/carSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
