import React from 'react';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { useStyles } from './styles';

export const DialogContent: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <MuiDialogContent dividers className={classes.root}>
      {children}
    </MuiDialogContent>
  );
};
