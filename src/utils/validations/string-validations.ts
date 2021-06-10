export function isTextOnly(text: string): boolean {
  const re = /^[A-Za-zÀ-ü ]*$/;
  return re.test(text);
}
