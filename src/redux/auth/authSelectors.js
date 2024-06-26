export const getLoading = state => state.auth.loading;

export const getUser = state => state.auth.user;

export const getLoggedInStatus = state => state.auth.user.isLoggedIn;

export const getError = state => state.auth.error;

export const getToken = state => state.auth.token;

export const getRefreshingStatus = state => state.auth.isRefreshing;
