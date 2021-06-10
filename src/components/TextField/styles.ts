import { makeStyles } from '@material-ui/core';
import { tokens } from '../../layout/tokens';

export const useStyles = makeStyles({
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
  textError: {
    color: tokens.supportHighLight1.Base,
  },
});

interface UseClasses {
  textInput: {
    root: string;
  };
}

export const useClasses = (): UseClasses => {
  const classes = useStyles();

  return {
    textInput: {
      root: classes['.MuiTextField-root'],
    },
  };
};
