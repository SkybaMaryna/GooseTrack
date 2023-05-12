import { logoutThunk } from 'redux/Auth/authOperations';
import { fetchTasks } from './tasksOperations';
import { addTask} from './tasksOperations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  extraReducers: {
    [fetchTasks.pending]: state => {
      state.loading = true;
    },
    [fetchTasks.fulfilled]: (state, { payload }) => {
      state.tasks = payload;
      state.loading = false;
      state.error = null;
    },
    [fetchTasks.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [logoutThunk.fulfilled]: state => {
      state.tasks = [];
    },
    [addTask.fulfilled]: (state, { payload }) => {
      const date = payload.date.split('T')[0];
      let tasks = state.tasks.find(t => t.date === date);
      tasks = !tasks ? {tasks: [], date} : tasks;
      tasks.tasks.push(payload);
      state.tasks = [...state.tasks, tasks];
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
