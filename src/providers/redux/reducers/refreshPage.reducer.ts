import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type refreshPageState = {
  lastUpdate?: number;
};

const initialState: refreshPageState = {
  lastUpdate: undefined,
};

const refreshPageSlice = createSlice({
  name: 'refreshPageSlice',
  initialState,
  reducers: {
    setLastUpdate(state, action: PayloadAction<number>) {
      return {
        ...state,
        lastUpdate: action.payload,
      };
    },
  },
});

export const { setLastUpdate } = refreshPageSlice.actions;

export default refreshPageSlice.reducer;
