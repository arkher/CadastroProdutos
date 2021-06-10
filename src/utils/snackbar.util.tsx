import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useSnackbar, WithSnackbarProps } from 'notistack';

interface IProps {
  setUseSnackbarRef: (showSnackbar: WithSnackbarProps) => void;
}

export type Severity = 'success' | 'info' | 'warning' | 'error' | undefined;

const InnerSnackbarUtilsConfigurator: React.FC<IProps> = ({
  setUseSnackbarRef,
}: IProps) => {
  setUseSnackbarRef(useSnackbar());
  return null;
};

let useSnackbarRef: WithSnackbarProps | null;
const setUseSnackbarRef = (useSnackbarRefProp: WithSnackbarProps) => {
  useSnackbarRef = useSnackbarRefProp;
};

export const SnackbarUtilsConfigurator: React.FC = () => {
  return (
    <InnerSnackbarUtilsConfigurator setUseSnackbarRef={setUseSnackbarRef} />
  );
};
const handleOnclose = (key: string) => {
  useSnackbarRef?.closeSnackbar(key);
};
export default {
  success(text: string, title = 'Sucesso!', key?: string): void {
    this.toast(title, text, 'success', key);
  },
  warning(text: string, title = 'Atenção!', key?: string): void {
    this.toast(title, text, 'warning', key);
  },
  info(text: string, title = 'Informativo', key?: string): void {
    this.toast(title, text, 'info', key);
  },
  error(
    text: string,
    title = 'Ops!',
    key?: string,
    autoHideDuration?: number | null,
  ): void {
    this.toast(title, text, 'error', key, autoHideDuration);
  },
  toast(
    title: string,
    text: string,
    severity: Severity,
    key = `alert_${Date.now()}`,
    autoHideDuration?: number | null,
  ): void {
    useSnackbarRef?.enqueueSnackbar(text, {
      key,
      autoHideDuration,
      anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      onClick: () => handleOnclose(key),
      content: (
        <Alert severity={severity} onClose={() => handleOnclose(key)}>
          <AlertTitle>{title}</AlertTitle>
          {text}
        </Alert>
      ),
    });
  },
};
