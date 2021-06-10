import { combineReducers } from '@reduxjs/toolkit';
import applicationErrorSlice from './providers/redux/reducers/applicationError.reducer';
import fooSlice from './providers/redux/reducers/Foo/foo.reducer';
import refreshPageSlice from './providers/redux/reducers/refreshPage.reducer';
import userSlice from './providers/redux/reducers/user.reducer';

const rootReducer = combineReducers({
  usuarioState: userSlice,
  refreshPageState: refreshPageSlice,
  applicationErrorState: applicationErrorSlice,
  fooState: fooSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
