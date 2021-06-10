const API_URL = process.env.REACT_APP_API_URL;

export const ENV = process.env.REACT_APP_MODE;

export const ROUTES = {
  apiBaseUrl: (API_URL as unknown) as string,
};
