import { createSlice } from '@reduxjs/toolkit';
import { getContacts, createContact } from './contactsOperations';

const initialState = {
  data: {
    contacts: [],
    totalPages: 0,
    currentPage: 0,
    pageSize: 0,
    totalContacts: 0,
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

      // ***************  GET CONTACTS  *************** //

      .addCase(getContacts.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.data.contacts = payload.contacts;
        state.data.totalPages = Number(payload.totalPages);
        state.data.currentPage = Number(payload.currentPage);
        state.data.pageSize = Number(payload.pageSize);
        state.data.totalContacts = Number(payload.totalContacts);
        state.data.loading = false;
      })
      .addCase(getContacts.rejected, (state, { payload }) => {
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
