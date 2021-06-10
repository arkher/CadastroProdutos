import { requestApi } from '@/api';
import { FileEndpoint } from '../endpoints/file.endpoints';

type GeneratedHash = {
  hash: string;
};

export const FileService = {
  uploadFile: async (file: File | Blob): Promise<string> => {
    const { data } = await requestApi<GeneratedHash>(
      FileEndpoint.uploadFile(file),
    );
    return data.hash;
  },
  downloadFile: async (hash: string): Promise<Blob | undefined> => {
    if (hash) {
      const { data } = await requestApi<Blob>(FileEndpoint.donwloadFile(hash));
      return data;
    }
    return undefined;
  },
};
