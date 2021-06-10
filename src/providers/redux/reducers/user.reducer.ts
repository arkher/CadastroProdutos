import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type usuarioState = {
  usuario: UsuarioDTO;
};

const initialState: usuarioState = {
  usuario: {},
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UsuarioDTO>) {
      return { ...state, usuario: { ...state.usuario, ...action.payload } };
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
