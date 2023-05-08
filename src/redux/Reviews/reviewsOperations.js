import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/review/');
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
