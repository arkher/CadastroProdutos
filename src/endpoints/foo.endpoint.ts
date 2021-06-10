import { EndpointConfig } from '../api';
import { methods } from '../api/core/http.core';

export type FooEndpointPayload = {
  name: string;
  number: number;
};

export const FooEndpoint = {
  get(): EndpointConfig {
    return {
      method: methods.get,
      path: '/foo',
    };
  },
  getWithParams(param: number): EndpointConfig {
    return {
      method: methods.get,
      path: `/acessos-representante`,
      params: {
        param,
      },
    };
  },
  post(data: FooEndpointPayload): EndpointConfig {
    return {
      method: methods.post,
      data,
      path: '/foo',
    };
  },
};
