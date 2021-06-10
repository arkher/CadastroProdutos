import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type fooState = Foo;

const initialState: fooState = {};

const fooSlice = createSlice({
  name: 'fooSlice',
  initialState,
  reducers: {
    setBar(state, action: PayloadAction<string>) {
      return {
        ...state,
        bar: action.payload,
      };
    },
    clear() {
      return {};
    },
  },
});

export const { setBar, clear } = fooSlice.actions;

export default fooSlice.reducer;
