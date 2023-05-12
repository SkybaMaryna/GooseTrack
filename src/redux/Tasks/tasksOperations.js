import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async ({ year, month }, { rejectWithValue }) => {
    try {
      const res = await axios.get('/task/by-month', {params: {year, month} });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task, { rejectWithValue, dispatch }) => {
    try {
      await axios.post('/task', task);
      dispatch(fetchTasks());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`/task/${id}`);
      dispatch(fetchTasks());
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.put(`/task/${id}`);
      dispatch(fetchTasks());
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
