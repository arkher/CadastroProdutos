import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import { useStyles } from './styles';

export const RoundedButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  const classes = useStyles();
  const { children, className } = props;
  return (
    <Button {...props} className={`${classes.root} ${className}`}>
      {children}
    </Button>
  );
};

RoundedButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
};
