import { createSlice } from '@reduxjs/toolkit';
import {
  getAllContacts,
  getFavoriteContacts,
  createContact,
} from './contactsOperations';

const initialState = {
  data: {
    contacts: [],
    favorites: [],
    loading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder

      // ***************  GET ALL CONTACTS  *************** //

      .addCase(getAllContacts.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getAllContacts.fulfilled, (state, { payload }) => {
        state.data.contacts = payload.contacts;
        state.data.loading = false;
      })
      .addCase(getAllContacts.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      // ***************  GET FAVORITES CONTACTS  *************** //

      .addCase(getFavoriteContacts.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getFavoriteContacts.fulfilled, (state, { payload }) => {
        state.data.favorites = payload.contacts;
        state.data.loading = false;
      })
      .addCase(getFavoriteContacts.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      // ***************  CREATE CONTACT  *************** //

      .addCase(createContact.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(createContact.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.contacts = [...state.data.contacts, payload];
      })
      .addCase(createContact.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });

    // ***************  DELETE CONTACT  ************** //
  },
});
