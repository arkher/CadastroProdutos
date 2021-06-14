import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles({
  root: {
    overflowY: 'scroll',
    width: '60%',
  },
  selectRoot: {
    display: 'flex',
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderBottom: `2px solid ${tokens.colorNeutral.Base}`,
      borderTop: `2px solid ${tokens.colorNeutral.Base}`,
      borderRight: `2px solid ${tokens.colorNeutral.Base}`,
      borderLeft: `2px solid ${tokens.colorNeutral.Base}`,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderBottom: `2px solid ${tokens.colorBrand.Base}`,
      borderTop: `2px solid ${tokens.colorBrand.Base}`,
      borderRight: `2px solid ${tokens.colorBrand.Base}`,
      borderLeft: `2px solid ${tokens.colorBrand.Base}`,
    },
    '& .MuiInputBase-root': {
      paddingRight: 0,
      height: 48,
    },
    '& .MuiSelect-root': {
      background: 'white',
    },
  },
  input: {
    '& .MuiInputBase-root': {
      height: 48,
    },
  },
  multilineTextField: {
    width: '100%',
  },
  InputAutocomplete: {
    '.MuiTextField-root': {
      '& label.Mui-focused': {
        color: tokens.colorBrand.Base,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          border: '2px solid #b4bbc2',
        },
        '&.Mui-focused fieldset': {
          border: `2px solid ${tokens.colorBrand.Base}`,
        },
      },
    },
  },
});

export const useStylesAutocomplete = makeStyles({
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
  const classes = useStylesAutocomplete();

  return {
    select: {
      root: classes.root,
      listbox: classes.listbox,
    },
  };
};

export const useStylesTextfield = makeStyles({
  root: {
    height: tokens.size.Xxl,
    '& MuiInputBase-root': {
      height: tokens.size.Xxl,
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input': {
      padding: 0,
    },
    '& label.Mui-focused': {
      color: tokens.colorBrand.Base,
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
      height: tokens.size.Xxl,
      '&:hover fieldset': {
        border: '2px solid #b4bbc2',
      },
      '&.Mui-focused fieldset': {
        border: `2px solid ${tokens.colorBrand.Base}`,
      },
    },
  },
});
