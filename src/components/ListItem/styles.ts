import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    display: 'inline',
  },
  gutters: {
    padding: '0',
  },
});

interface UseClasses {
  listItem: {
    root: string;
    gutters: string;
  };
}

export const useClasses = (): UseClasses => {
  const classes = useStyles();

  return {
    listItem: {
      root: classes.root,
      gutters: classes.gutters,
    },
  };
};
