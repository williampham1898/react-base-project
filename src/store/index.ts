import { configureStore } from '@reduxjs/toolkit';
import exampleSlice from './slices/examples';

export const store = configureStore({
  reducer: {
    example: exampleSlice,
  },
});
