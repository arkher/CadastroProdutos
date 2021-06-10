import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  chip: {
    height: 34,
    margin: 8,
    maxMidth: 180,
  },
  label: {},
});

interface UseClasses {
  chip: {
    root: string;
    label: string;
  };
}

export const useClasses = (): UseClasses => {
  const classes = useStyles();

  return {
    chip: {
      root: classes.chip,
      label: classes.label,
    },
  };
};
