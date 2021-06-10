import { makeStyles } from '@material-ui/core';
import { tokens } from '@layout/tokens';

export const useStyles = makeStyles({
  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    height: '26vh',
    paddingTop: 20,
    padding: 40,
    background: tokens.colorNeutral.White,
    boxSizing: 'border-box',
    borderRadius: tokens.borderRadius.Sm,
    border: `1px solid ${tokens.colorNeutral.Base}`,
  },
  button: {
    backgroundColor: tokens.colorBrand.Base,
    color: 'white',
    padding: '16px',
    fontSize: '12px',
    margin: '8px 24px',
    '&:hover': {
      backgroundColor: tokens.colorBrand.Dark,
    },
  },
});
