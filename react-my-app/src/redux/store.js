// 

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import { login } from './userThunks';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(login),
});

export default store;