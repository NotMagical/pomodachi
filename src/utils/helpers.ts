import { Platform, Dialog } from 'quasar';
export const reloadWindow = () => window.location.reload();
export const desktopCheck = () => {
  // No quasar way to distinguish between tablet and mobile devices.
  if (Platform.is.desktop || window.innerWidth > 900) {
    return true;
  }
  return false;
};

type prompt = {
  title: string;
  message: string;
  cancel?: boolean;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const prompt = ({ title, message, cancel = false }: prompt) => {
  return Dialog.create({
    dark: true,
    title: title || 'Confirm',
    message: message,
    ok: {
      push: true,
      color: 'primary',
    },
    cancel: cancel
      ? {
          flat: true,
          color: 'white',
        }
      : undefined,
  });
};

export const errorPrompt = (msg: string) =>
  prompt({ title: 'Error!', message: msg });

// eslint-disable-next-line @typescript-eslint/ban-types
export const tryCatch = (fn: Function) => {
  try {
    const result = fn();
    return [result, null];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};
