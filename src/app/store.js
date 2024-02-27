import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice.js';
import editUserReducer from '../features/editUserSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: editUserReducer
  },
})