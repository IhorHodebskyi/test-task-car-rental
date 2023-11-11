import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from 'redux-persist';
import { carsReducer } from './cars/slice';
import persistStore from 'redux-persist/es/persistStore';
import { filterReducer } from './filter/filterSlice';
import { favoritesReducer } from './favorite/slice';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
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
