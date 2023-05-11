import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './Tasks/tasksSlice';
import { reviewsReducer } from './Reviews/reviewsSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './Auth/authSlice';
import { modalReducer } from './Modal/modalSlice';
import { themeReducer } from './Theme/themeSlice';

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['accessToken', 'refreshToken'],
};

const persistConfigTheme = {
  key: 'theme',
  version: 1,
  storage,
  whitelist: ['theme'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    tasks: tasksReducer,
    reviews: reviewsReducer,
    modal: modalReducer,
    theme: persistReducer(persistConfigTheme, themeReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== 'production',
});
export const persistor = persistStore(store);
