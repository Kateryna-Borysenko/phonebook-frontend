import { configureStore } from '@reduxjs/toolkit';
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
import { customMiddlewareLogger } from './Middleware/customMiddlewareLogger';
import { authSlice } from '../redux/auth/authSlice';
import { contactsSlice } from '../redux/contacts/contactsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'],
};

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    auth: persistReducer(persistConfig, authSlice.reducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(customMiddlewareLogger),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
