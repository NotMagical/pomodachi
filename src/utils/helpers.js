import { Platform } from 'quasar';
export const reloadWindow = () => window.location.reload();
export const desktopCheck = () => {
  // No quasar way to distinguish between tablet and mobile devices.
  if (Platform.is.desktop || window.innerWidth > 900) {
    return true;
  }
  return false;
};
