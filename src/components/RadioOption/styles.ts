import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { tokens } from '../../layout/tokens';
import { RadioOptionProps } from './RadioOption';

export const useStyles = makeStyles({
  formLabelRoot: {
    backgroundColor: tokens.colorNeutral.White,
    border: `1px solid ${tokens.colorNeutral.Base}`,
    borderRadius: '4px',
    color: tokens.colorNeutral.Dark,
    paddingRight: tokens.spacingInline.Nano,
    paddingLeft: tokens.spacingInline.Nano,
    alignSelf: 'flex-start',
    '& .MuiTypography-root': {
      paddingRight: tokens.spacingInline.Quark,
      paddingLeft: tokens.spacingInline.Quark,
    },
  },
  formLabelChecked: {
    backgroundColor: tokens.colorBrand.Lightest,
    margin: '0px',
    border: `2px solid ${tokens.colorBrand.Base}`,
    color: tokens.colorBrand.Base,
  },
  radioRoot: {
    color: tokens.colorNeutral.Base,
    '&$radioChecked': {
      color: tokens.colorBrand.Base,
    },
    '&:hover': {
      backgroundColor: `${tokens.colorNeutral.Dark}0a`,
    },
    '&$radioChecked:hover': {
      backgroundColor: `${tokens.colorBrand.Base}0a`,
    },
  },
  radioChecked: {},
});

interface UseClasses {
  formLabel: {
    root: string;
  };
  radio: {
    root: string;
    checked: string;
  };
}

export const useClasses = (props: RadioOptionProps): UseClasses => {
  const classes = useStyles();

  return {
    formLabel: {
      root: clsx(classes.formLabelRoot, {
        [classes.formLabelChecked]: props.checked,
      }),
    },
    radio: {
      root: classes.radioRoot,
      checked: classes.radioChecked,
    },
  };
};
