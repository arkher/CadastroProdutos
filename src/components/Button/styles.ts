import { makeStyles } from '@material-ui/core';
import { buttons, tokens } from '@/layout/tokens';

type Props = {
  loading?: boolean;
  fullWidth?: boolean;
  variant: buttonVariants;
  severity: buttonSeverity;
};

export type buttonVariants = 'contained' | 'text' | 'outlined';

export type buttonSeverity = 'default' | 'success' | 'danger';

export const useStyles = makeStyles({
  button: ({ loading, fullWidth, variant, severity }: Props) => ({
    textTransform: 'none',
    fontSize: 12,
    backgroundColor: buttons[`${variant}`][`${severity}`].backgroundColor,
    width: fullWidth ? '100%' : '152px',
    height: tokens.size.Xxl,
    alignSelf: 'flex-end',
    color: buttons[`${variant}`][`${severity}`].color,
    border: buttons[`${variant}`][`${severity}`].border,
    '&.MuiButton-root': {
      padding: 0,
    },
    '&:hover': {
      backgroundColor: buttons[`${variant}`][`${severity}`].hoverColor,
      color: buttons[`${variant}`][`${severity}`].hoverTextColor,
    },
    '&.Mui-disabled': {
      opacity: !loading ? '64%' : '100%',
      color: buttons[`${variant}`][`${severity}`].color,
    },
    '&.Mui-focusVisible': {
      backgroundColor: buttons[`${variant}`][`${severity}`].hoverColor,
    },
  }),
  circularIndicator: ({ variant, severity }: Props) => ({
    color: buttons[`${variant}`][`${severity}`].color,
  }),
});
