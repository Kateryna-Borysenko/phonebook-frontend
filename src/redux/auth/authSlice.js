import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  updateUserAvatar,
} from './authOperations';

const initialState = {
  user: { name: '', email: '', avatarURL: '', isLoggedIn: false },
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setExpirationTime: (state, action) => {
      const oneHourInMillis = 60 * 60 * 1000;
      const expirationTime = Date.now() + oneHourInMillis;
      localStorage.setItem('expirationTime', expirationTime);
    },
    removeExpirationTime: (state, action) => {
      localStorage.removeItem('expirationTime');
    },
  },
  extraReducers: builder => {
    builder

      // ***************  REGISTER  *************** //
      .addCase(registerUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })

      // ***************  LOGIN  *************** //
      .addCase(loginUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.user.isLoggedIn = true;
        state.user.name = payload.user.name;
        state.user.email = payload.user.email;
        state.user.avatarURL = payload.user.avatarURL;
        state.user.subscription = payload.user.subscription;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })

      // ***************  LOGOUT  *************** //
      .addCase(logoutUser.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.user.email = '';
        state.user.name = '';
        state.user.avatarURL = '';
        state.user.isLoggedIn = false;
        state.loading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      })

      // ***************  AVATAR  *************** //
      .addCase(updateUserAvatar.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(updateUserAvatar.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user.avatarURL = payload.avatarURL;
      })
      .addCase(updateUserAvatar.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const { setExpirationTime, removeExpirationTime } = authSlice.actions;
