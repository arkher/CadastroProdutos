import { Theme, ThemeOptions } from '@material-ui/core';

/* eslint-disable no-shadow */
declare module '@material-ui/core' {
  interface Theme {
    height: {
      appBar: number;
    };
    width: {
      sideBar: number;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    height?: {
      appBar?: number;
    };
    width?: {
      sideBar?: number;
    };
  }
}
