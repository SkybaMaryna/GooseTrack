import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://goose-tracker-backend.p.goit.global/';

const setToken = token => {
  axios.defaults.headers.common.Authorization = ` Bearer ${token}`;
};

const removeToken = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/register', user);
      setToken(res.data.data.accessToken);
      return res.data;
    } catch (error) {
      if (error.message === 'Request failed with status code 409') {
        toast.error(`User with this email  already exist`);
      } else {
        toast.error(
          `enter valid email: min 6, max 63 characters, except .ru, .su, .рус, .рф,.москва etc`
        );
      }
      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post('/user/login', user);
      setToken(res.data.data.accessToken);
      return res.data;
    } catch (error) {
      toast.error(`Email doesn't exist or Password is wrong`);
      return rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios('/user/logout');
      removeToken();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.accessToken;
    if (savedToken === '') {
      return thunkAPI.rejectWithValue('Token was not found');
    }
    try {
      setToken(savedToken);
      return savedToken;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserInfoThunk = createAsyncThunk(
  'auth/userInfo',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.accessToken;
    try {
      setToken(savedToken);
      const res = await axios('/user/info');
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserThunk = createAsyncThunk(
  'auth/updateUser',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.patch('/user/update', data);
      return res.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
