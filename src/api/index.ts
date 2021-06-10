import axios, { AxiosInstance, AxiosPromise } from 'axios';
import { stringify } from 'qs';
import { ROUTES } from '../environments';
// import { handleError, handleResponse } from './error.interceptor';

export type EndpointConfig = {
  method: string;
  path: string;
  data?: Object;
  headers?: Object;
  params?: Object;
  responseType?: string;
};

// default headers
const DefaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

let axiosInstance: AxiosInstance | undefined;

export const getAxiosInstance = (): AxiosInstance => {
  if (axiosInstance) {
    return axiosInstance;
  }
  axiosInstance = axios.create({
    baseURL: ROUTES.apiBaseUrl,
    headers: { ...DefaultHeaders },
    timeout: 15000,
    paramsSerializer(params: Object) {
      return stringify(params, { arrayFormat: 'repeat' });
    },
  });
  // axiosInstance.interceptors.response.use(handleResponse, handleError);
  return axiosInstance;
};

export const updateToken = (token: string): void => {
  getAxiosInstance().defaults.headers.common.Authorization = `Bearer ${token}`;
};

/**
 *
 * @param config configurações da requisição
 * @template T: Define um tipo de retorno
 */
export const requestApi = async <T>(
  config: EndpointConfig,
): Promise<AxiosPromise<T>> => {
  const { data, path, headers, params, method, responseType } = config;

  const requestPromise = data
    ? getAxiosInstance()?.[method.toLowerCase()]<T>(path, data, {
        headers,
        params,
        responseType,
      })
    : getAxiosInstance()?.[method.toLowerCase()]<T>(path, {
        headers,
        params,
        responseType,
      });

  return requestPromise;
};
