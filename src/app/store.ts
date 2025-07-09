import { configureStore } from '@reduxjs/toolkit';
import roleReducer from '../store/slices/roleSlice';
import authReducer from '../store/slices/authSlice';
import bagNameReducer from '../store/slices/bagNameSlice';

const savedToken = localStorage.getItem('token');
const savedRole = localStorage.getItem('role');
const savedBagName = localStorage.getItem('bagName');

export const store = configureStore({
  reducer: {
    role: roleReducer,
    auth: authReducer,
    bagName: bagNameReducer
  },
  preloadedState: {
    role: {
      role: savedRole as 'farmer' | 'client' | null,
    },
    auth: {
      token: savedToken,
    },
    bagName: {
      bagName: savedBagName
    }
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
