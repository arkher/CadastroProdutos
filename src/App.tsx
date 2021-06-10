import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import deLocale from 'date-fns/locale/pt-BR';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ErrorBoundary from '@/providers/ErrorBoundary';
import LayoutGlobal from './layout/global.layout';
import { RouterProvider } from './providers/Router.provider';
import { persistor, store } from './store';
import { SnackbarUtilsConfigurator } from './utils/snackbar.util';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0066B2',
    },
  },
  spacing: [4, 8, 16, 24, 32, 40, 48, 56, 64, 80, 120],
  zIndex: {
    appBar: 1,
    drawer: 0,
  },
  height: {
    appBar: 64,
  },
  width: {
    sideBar: 280,
  },
});

const App = (): React.ReactElement => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <PersistGate loading={null} persistor={persistor}>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
            <React.StrictMode>
              <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={5}>
                  <SnackbarUtilsConfigurator />
                  <LayoutGlobal />
                  <RouterProvider />
                </SnackbarProvider>
              </ThemeProvider>
            </React.StrictMode>
          </MuiPickersUtilsProvider>
        </PersistGate>
      </ErrorBoundary>
    </Provider>
  );
};
export default App;
