import React, { ReactElement, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

type CardHeaderProps = {
  children: ReactNode;
};

export const CardHeader = ({ children }: CardHeaderProps): ReactElement => {
  const classes = useStyles();
  return <Box className={classes.root}>{children}</Box>;
};
