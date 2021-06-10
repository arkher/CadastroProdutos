import { makeStyles } from '@material-ui/core';
import { tokens } from '../../layout/tokens';

export const useStyles = makeStyles({
  root: {},
  listbox: {
    padding: 0,
    '& :hover': {
      backgroundColor: `${tokens.supportHighLight2.Light}`,
      color: `${tokens.colorBrand.Base}`,
    },
    '& .MuiAutocomplete-option': {
      padding: `${tokens.spacingInsert.Xs}px`,
    },
  },
});

interface UseClasses {
  select: {
    root: string;
    listbox: string;
  };
}

export const useClasses = (): UseClasses => {
  const classes = useStyles();

  return {
    select: {
      root: classes.root,
      listbox: classes.listbox,
    },
  };
};
