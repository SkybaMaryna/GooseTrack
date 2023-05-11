import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalAddTaskOpen: false,
    isModalUpdateTask: false,
    isModalConfirmation: false,
    isSideBar: false,
  },

  reducers: {
    openModalAddTask(state) {
      state.isModalAddTaskOpen = true;
    },
    closeModalAddTask(state) {
      state.isModalAddTaskOpen = false;
    },
    openModalUpdateTask(state) {
      state.isModalUpdateTask = true;
    },
    closeModalUpdateTask(state) {
      state.isModalUpdateTask = false;
    },
    openModalConfirmation(state) {
      state.isModalConfirmation = true;
    },
    closeModalConfirmation(state) {
      state.isModalConfirmation = false;
    },
    openSideBar(state) {
      state.isSideBar = true;
    },
    closeSideBar(state) {
      state.isSideBar = false;
    },
  },
});
export const {
  openModalAddTask,
  closeModalAddTask,
  openModalUpdateTask,
  closeModalUpdateTask,
  openModalConfirmation,
  closeModalConfirmation,
  openSideBar,
  closeSideBar,
} = modalSlice.actions;

export const modalReducer = modalSlice.reducer;
