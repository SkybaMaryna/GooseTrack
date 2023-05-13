import { createSlice } from '@reduxjs/toolkit';
import {
  getUserInfoThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
  updateUserThunk,
} from './authOperations';

const initialState = {
  user: null,
  accessToken: '',
  refreshToken: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.data.accessToken;
      state.refreshToken = payload.data.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [registerThunk.pending]: state => {
      state.isLoading = true;
    },
    [registerThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload.error;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.accessToken = payload.data.accessToken;
      state.refreshToken = payload.data.refreshToken;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [loginThunk.pending]: state => {
      state.isLoading = true;
    },
    [loginThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload.error;
    },
    [logoutThunk.fulfilled]: state => {
      state.user = '';
      state.accessToken = '';
      state.refreshToken = '';
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [logoutThunk.pending]: state => {
      state.isLoading = true;
    },
    [logoutThunk.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [refreshThunk.fulfilled]: state => {
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [refreshThunk.pending]: state => {
      state.isLoading = true;
    },
    [refreshThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [getUserInfoThunk.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoading = false;
      state.error = null;
    },
    [getUserInfoThunk.pending]: state => {
      state.isLoading = true;
    },
    [getUserInfoThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    },
    [updateUserThunk.pending]: state => {
      state.isLoading = true;
    },
    [updateUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = payload;
    },
  },
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.accessToken = '';
    },
  },
});

export const authReducer = authSlice.reducer;
export const logout = authSlice.actions.logout;
