import snackbarUtil from '../snackbar.util';

export const withPromiseSnackBar = (func: () => Promise<void>) => (
  textSuccess: string | undefined,
) => (textError: string | undefined) => async (): Promise<void> => {
  try {
    await func();
    snackbarUtil.success(textSuccess || 'Sucesso!');
  } catch (e) {
    snackbarUtil.error(textError || 'Algo deu errado');
  }
};
