// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import installationReducer from './slices/installationSlice';


const store = configureStore({
  reducer: {
    installations: installationReducer,
   
  },
});

export default store; // ✅ Make sure it's `default` export
