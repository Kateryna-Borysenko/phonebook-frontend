import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { AUTH_ENDPOINT } from '../../helpers/endpoints/authEndpoint';

const SERVER_URL = process.env.REACT_APP_SERVER_BASE_URL;
axios.defaults.baseURL = SERVER_URL;
// axios.defaults.withCredentials = true;

export const setTokenAuthInstance = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);

export const clearTokenAuthInstance = () =>
  (axios.defaults.headers.common.Authorization = '');

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINT.REGISTER, credentials);
      toast.success(`${data.name}, check your email for verification, please!`);
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error(error.response?.data?.message);
      }
      if (error.response.status === 409) {
        toast.error(error.response?.data?.message);
      }
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(AUTH_ENDPOINT.LOGIN, credentials);
      toast.success(`${data.user.name} welcome to PhoneBook!`);
      return data;
    } catch (error) {
      if (
        error.response.status === 500 ||
        error.response?.data?.message ===
          "Cannot read properties of null - 'verify'"
      ) {
        toast.error('Email is not verified');
      }

      if (error.response.status === 401) {
        toast.error(
          error.response?.data?.message || 'Email or password invalid',
        );
      }
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const initiateGoogleAuth = createAsyncThunk(
  'auth/GoogleAuth',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(AUTH_ENDPOINT.GOOGLE);
      console.log('🌷  response :', data);
      return data;
    } catch (error) {
      toast.error(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, ThunkAPI) => {
    try {
      await axios.post(AUTH_ENDPOINT.LOGOUT);
      return;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const updateUserAvatar = createAsyncThunk(
  'auth/updateUserAvatar',
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', file);

      const { data } = await axios.patch(
        AUTH_ENDPOINT.UPDATE_AVATAR,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      toast.success(data.message);
      return data;
    } catch (error) {
      toast.error('Error uploading avatar.');
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
