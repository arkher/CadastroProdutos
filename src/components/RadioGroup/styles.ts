import { makeStyles } from '@material-ui/core';
import { tokens } from '../../layout/tokens';

export const useStyles = makeStyles({
  formLabelRoot: {
    color: tokens.colorNeutral.Dark,
  },
});

interface UseClasses {
  formLabel: {
    root: string;
  };
}

export const useClasses = (): UseClasses => {
  const classes = useStyles();

  return {
    formLabel: {
      root: classes.formLabelRoot,
    },
  };
};
