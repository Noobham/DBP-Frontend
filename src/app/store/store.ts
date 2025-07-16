import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      user: userReducer,
      cart: cartReducer,
    },
  });

export const store = makeStore(); // For client-side use

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
