export const getLoading = state => state.contacts.data.loading;

export const getError = state => state.contacts.data.error;

export const getAllContacts = state => state.contacts.data.contacts;

export const getCurrentPage = state => state.contacts.data.currentPage;

export const getTotalPages = state => state.contacts.data.totalPages;

export const getPageSize = state => state.contacts.data.pageSize;

export const getTotalContacts = state => state.contacts.data.totalContacts;

export const getFilter = state => state.contacts.filter;
