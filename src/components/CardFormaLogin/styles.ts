import { makeStyles } from '@material-ui/core';
import { tokens } from '@layout/tokens';

export const useStyles = makeStyles({
  loginCard: {
    display: 'flex',
    flexDirection: 'column',
    height: '22vh',
    padding: 40,
    background: ' #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: tokens.borderRadius.Sm,
    '& $typeIcon': {
      color: tokens.colorBrand.Base,
    },
    '&:hover': {
      backgroundColor: tokens.colorBrand.Base,
      color: tokens.colorNeutral.Darkest,
      transition: 'all 150ms ease-out',
      '& $loginTypeText': {
        color: tokens.colorNeutral.White,
      },
      '& $typeIcon': {
        color: tokens.colorNeutral.White,
      },
    },
  },
  loginTypeText: {
    fontFamily: tokens.fontFamily.Ff1,
    fontSize: '18px',
    color: tokens.colorNeutral.Dark,
    '.loginCard:hover': {
      color: tokens.colorNeutral.Light,
    },
  },
  typeIcon: {
    transform: 'scale(2)',
    color: tokens.colorNeutral.Dark,
  },
});
