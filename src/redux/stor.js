import { configureStore } from '@reduxjs/toolkit';
import homePageSlice from './slice/tabs';

export const store = configureStore({
  reducer: {
    message: homePageSlice
  }
});