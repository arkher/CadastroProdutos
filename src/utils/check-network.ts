export default function checkNetwork(): boolean {
  if (window.navigator.onLine) {
    return true;
  }
  return false;
}
