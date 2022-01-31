import { configureStore } from '@reduxjs/toolkit';
import applicationFormReducer from './applicationForm/applicationFormSlice';
// Global state'imizdeki elemanların tuttuğu değerleri barındıran bir objedir.
export const store = configureStore({
  reducer: {
    applicationForm: applicationFormReducer
  }
});
