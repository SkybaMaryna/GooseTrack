import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalAddTaskOpen: false,
    isModalUpdateTask: false,
    isModalConfirmation: false,
    isModalLogOut: false,
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
      state.isModalUpDateTask = true;
    },
    closeModalUpdateTask(state) {
      state.isModalUpDateTask = false;
    },
    openModalConfirmation(state) {
      state.isModalConfirmation = true;
    },
    closeModalConfirmation(state) {
      state.isModalConfirmation = false;
    },
    openModalLogOut(state) {
      state.isModalLogOut = true;
    },
    closeModalLogOut(state) {
      state.isModalLogOut = false;
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
  openModalLogOut,
  closeModalLogOut,
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
