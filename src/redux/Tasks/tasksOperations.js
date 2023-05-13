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
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.post('/task', task);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/task/${id}`);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async (task, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/task/${task.id}`, task.task);
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
