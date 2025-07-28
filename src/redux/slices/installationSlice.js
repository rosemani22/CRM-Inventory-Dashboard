// src/redux/slices/installationSlice.js

import { createSlice } from '@reduxjs/toolkit';
import LocalStorageService from '../../services/LocalStorageService';

const STORAGE_KEY = 'installations';

const initialState = {
  data: LocalStorageService.get(STORAGE_KEY) || [],
};

const installationSlice = createSlice({
  name: 'installations',
  initialState,
  reducers: {
    addInstallation: (state, action) => {
      const newEntry = action.payload;
      state.data.push(newEntry);
      LocalStorageService.set(STORAGE_KEY, state.data);
    },
    deleteInstallation: (state, action) => {
      state.data = state.data.filter(inst => inst.id !== action.payload);
      LocalStorageService.set(STORAGE_KEY, state.data);
    },
  },
});

export const { addInstallation, deleteInstallation } = installationSlice.actions;
export default installationSlice.reducer;
