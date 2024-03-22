import { createSlice } from '@reduxjs/toolkit';
import { getContacts, createContact } from './contactsOperations';

const initialState = {
  data: {
    items: [],
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

      // .addCase(getContacts.pending, state => {
      //   state.data.loading = true;
      //   state.data.error = null;
      // })
      // .addCase(getContacts.fulfilled, (state, { payload }) => {
      //   state.data.loading = false;
      //   state.data.items = payload;
      // })
      // .addCase(getContacts.rejected, (state, { payload }) => {
      //   state.data.loading = false;
      //   state.data.error = payload;
      // })

      // ***************  CREATE CONTACT  *************** //

      .addCase(createContact.pending, state => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(createContact.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.items = [...state.data.items, payload];
      })
      .addCase(createContact.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });

    // ***************  DELETE CONTACT  ************** //
  },
});
