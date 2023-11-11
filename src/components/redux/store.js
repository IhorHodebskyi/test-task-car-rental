import { configureStore } from '@reduxjs/toolkit';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { carsReducer } from './slice';
import persistStore from 'redux-persist/es/persistStore';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
