import React from 'react';
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  Icon,
  IconButton,
} from '@material-ui/core';
import { useStyles } from './styles';

type CustomProps = {
  title?: String;
  handleClose(): void;
  actions?: React.ReactElement;
};

type DialogProps = MuiDialogProps & CustomProps;

const GenericDialog: React.FC<DialogProps> = (props: DialogProps) => {
  const {
    open,
    children,
    maxWidth = 'sm',
    fullWidth = true,
    handleClose,
    actions,
    title,
    onBackdropClick,
    onEscapeKeyDown,
    ...otherProps
  } = props;

  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onBackdropClick={onBackdropClick || handleClose}
      onEscapeKeyDown={onEscapeKeyDown || handleClose}
      onClose={handleClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      {...otherProps}
    >
      <DialogTitle disableTypography className={classes.dialogTitleText}>
        <Box>{title}</Box>
        <IconButton onClick={handleClose} style={{ padding: '8px' }}>
          <Icon>close</Icon>
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions className={classes.dialogActions}>{actions}</DialogActions>
    </Dialog>
  );
};

GenericDialog.defaultProps = {
  title: '',
  actions: undefined,
};

export { GenericDialog };
