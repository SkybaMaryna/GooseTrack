import { createSlice } from '@reduxjs/toolkit';
import { fetchReviews } from './reviewsOperations';

const initialState = {
  reviews: [],
  loading: false,
  error: null,
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  extraReducers: {
    [fetchReviews.pending]: state => {
      state.loading = true;
    },
    [fetchReviews.fulfilled]: (state, { payload }) => {
      state.reviews = payload;
      state.loading = false;
      state.error = null;
    },
    [fetchReviews.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const reviewsReducer = reviewsSlice.reducer;
