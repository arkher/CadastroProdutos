import { EndpointConfig } from '../api';
import { methods } from '../api/core/http.core';

export const FileEndpoint = {
  uploadFile(file: File | Blob): EndpointConfig {
    const formData = new FormData();
    formData.append('file', file);

    return {
      method: methods.post,
      headers: {
        'Content-Type': `multipart/form-data;`,
      },
      data: formData,
      path: '/file',
    };
  },
  donwloadFile(hash: String): EndpointConfig {
    return {
      method: methods.get,
      path: `/file/${hash}`,
      responseType: 'blob',
    };
  },
};
