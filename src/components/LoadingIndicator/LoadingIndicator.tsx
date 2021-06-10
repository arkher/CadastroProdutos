import React from 'react';
import MuiCircularProgress, {
  CircularProgressProps,
} from '@material-ui/core/CircularProgress';
import { useStyles } from './styles';

const LoadingIndicator: React.FC<CircularProgressProps> = (
  props: CircularProgressProps,
) => {
  const { className } = props;
  const classes = useStyles();
  return (
    <MuiCircularProgress {...props} className={className ?? classes.root} />
  );
};

export { LoadingIndicator };
