export const convertBlobToBase64 = (
  blob: Blob,
  removePrefix?: boolean,
): Promise<string> => {
  const response: Promise<string> = (new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    return reader.readAsDataURL(blob);
  }) as unknown) as Promise<string>;
  return removePrefix ? response.then(r => r.split(',')[1]) : response;
};
