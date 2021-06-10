import React, { ReactNode } from 'react';
import { Button as MuiButton } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator';
import { buttonSeverity, buttonVariants, useStyles } from './styles';

type ButtonPropsCustom = {
  children: ReactNode;
} & Partial<ButtonOptionalProps>;

type ButtonOptionalProps = {
  startIcon: ReactNode;
  endIcon: ReactNode;
  variant?: buttonVariants;
  severity?: buttonSeverity;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick(): void;
  loading?: boolean;
  disableRipple?: boolean;
  disableElevation?: boolean;
  style?: CSSProperties;
};

const Button = (props: ButtonPropsCustom): React.ReactElement => {
  const {
    loading,
    onClick,
    startIcon,
    endIcon,
    children,
    disabled,
    fullWidth,
    variant,
    severity,
    disableRipple,
    disableElevation,
    style,
  } = props;
  const classes = useStyles({
    loading,
    fullWidth,
    variant: variant || 'contained',
    severity: severity || 'default',
  });

  return (
    <MuiButton
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled || loading}
      className={classes.button}
      disableRipple={disableRipple}
      disableElevation={disableElevation}
      style={style}
    >
      {loading ? (
        <LoadingIndicator size={24} className={classes.circularIndicator} />
      ) : (
        children
      )}
    </MuiButton>
  );
};

export default Button;
