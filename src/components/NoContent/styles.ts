import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles({
  box: {
    width: '100%',
    height: tokens.size.Xxl,
    borderRadius: tokens.borderRadius.Sm,
    backgroundColor: tokens.colorNeutral.Lightest,
    color: tokens.colorNeutral.Dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
