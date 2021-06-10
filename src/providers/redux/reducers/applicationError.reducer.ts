import { ErrorInfo } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type applicationErrorState = {
  error: Error | undefined;
  errorInfo: ErrorInfo | undefined;
  hasError: boolean;
};

const initialState: applicationErrorState = {
  hasError: false,
  error: undefined,
  errorInfo: undefined,
};

const applicationErrorSlice = createSlice({
  name: 'applicationErrorSlice',
  initialState,
  reducers: {
    setErrorInfo(state, action: PayloadAction<applicationErrorState>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setErrorInfo } = applicationErrorSlice.actions;

export default applicationErrorSlice.reducer;
