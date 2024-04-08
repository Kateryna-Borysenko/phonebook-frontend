import { createSlice } from '@reduxjs/toolkit';
import {
  setTokenAuthInstance,
  clearTokenAuthInstance,
  registerUser,
  loginUser,
  logoutUser,
  updateUserAvatar,
} from './authOperations';

const initialState = {
  user: { name: '', email: '', avatarURL: '', isLoggedIn: false },
  token: '',
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
        state.token = payload.token;
        setTokenAuthInstance(payload.token);
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
      .addCase(logoutUser.fulfilled, () => {
        clearTokenAuthInstance();
        return initialState;
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
