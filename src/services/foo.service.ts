import { requestApi } from '../api';
import { FooEndpoint, FooEndpointPayload } from '../endpoints/index';

export const FooService = {
  postFoo: async (data: FooEndpointPayload): Promise<FooResult> => {
    const result = await requestApi<FooResult>(FooEndpoint.post(data));
    return result.data;
  },
  getFoo: async (): Promise<Array<Foo>> => {
    const result = await requestApi<Array<Foo>>(FooEndpoint.get());
    return result.data;
  },
};
