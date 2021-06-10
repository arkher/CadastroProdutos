import { AxiosError, AxiosResponse } from 'axios';
import keycloakInstance from '@/keycloak';
import { ApplicationService } from '@/services/Application.service';
import ApiError from './core/ApiError';
import {
  defaultHttpStatusResponse,
  httpStatusResponse,
} from './core/http.core';
import { getAxiosInstance, updateToken } from './index';

export function handleResponse(response: AxiosResponse): AxiosResponse {
  // Do something with response data
  return response;
}

let unauthorizedRetries = 0;

export function handleError(error: AxiosError): never | unknown {
  const forceMinValidity = -1;
  const unauthorizedErrorCode = 401;
  const { response, config } = error;
  const httpStatus = response?.status ?? 500;

  const originalRequest = config;

  const responseInfo =
    httpStatusResponse[httpStatus] || defaultHttpStatusResponse;

  if (
    error?.response?.status === unauthorizedErrorCode &&
    unauthorizedRetries < 2
  ) {
    return new Promise(resolve => {
      keycloakInstance
        .updateToken(forceMinValidity)
        .then((success: unknown) => {
          if (success) {
            unauthorizedRetries += 1;
            const axiosInstance = getAxiosInstance();
            const { token } = keycloakInstance;
            updateToken(token || '');
            originalRequest.headers.Authorization = `Bearer ${token}`;
            resolve(axiosInstance(originalRequest));
          } else {
            ApplicationService.forceLogout('NAO_AUTORIZADO');
          }
        });
    });
  }

  if (unauthorizedRetries >= 2) {
    ApplicationService.forceLogout('NAO_AUTORIZADO');
    return Promise.reject();
  }

  throw new ApiError(
    httpStatus,
    responseInfo.message,
    response?.data?.errorCode || responseInfo.code,
    response?.data,
  );
}
