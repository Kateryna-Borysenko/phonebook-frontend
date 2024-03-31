import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { CONTACTS_ENDPOINT } from '../../helpers/endpoints/contactsEndpoint';

const SERVER_URL = process.env.REACT_APP_SERVER_BASE_URL;

axios.defaults.baseURL = SERVER_URL;
axios.defaults.withCredentials = true;

export const getContacts = createAsyncThunk(
  'contacts/getAllContacts',
  async ({ page = 1, limit = 10, favorite = undefined }, ThunkAPI) => {
    try {
      const response = await axios.get(CONTACTS_ENDPOINT.CONTACTS, {
        params: { page, limit, favorite },
      });
      return response.data;
    } catch (error) {
      return ThunkAPI.rejectWithValue(error.message);
    }
  },
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async (credentials, ThunkAPI) => {
    try {
      const { data } = await axios.post(
        CONTACTS_ENDPOINT.CONTACTS,
        credentials,
      );
      toast.success('Contact created successfully!');
      return data;
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error(
          error.response?.data?.message ||
            'Bad request. Please check your data.',
        );
      } else if (error.response && error.response.status === 409) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error('An error occurred while creating the contact.');
        return ThunkAPI.rejectWithValue(error.message);
      }
    }
  },
);
