import React from 'react';
import {
  DialogTitle as MuiDialogTitle,
  IconButton,
  Typography,
  Grid,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from './styles';

export interface DialogTitleProps {
  id: string;
  titulo: string;
  onClose?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DialogTitle: React.FC<DialogTitleProps> = (props: DialogTitleProps) => {
  const classes = useStyles();
  const { id, titulo, onClose } = props;

  return (
    <MuiDialogTitle id={id} disableTypography className={classes.root}>
      <Grid style={{ justifyContent: 'space-between' }}>
        <Typography style={{ fontSize: 14 }}>{titulo}</Typography>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            className={classes.closeButton}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </Grid>
    </MuiDialogTitle>
  );
};

export { DialogTitle };
