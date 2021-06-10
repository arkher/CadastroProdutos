import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles({
  root: {
    width: '80%',
    background: 'blue',
    height: 200,
    borderRadius: 8,
    backgroundColor: tokens.colorNeutral.White,
    padding: 32,
    display: 'flex',
    flexDirection: 'column',
    boxShadow:
      '0px 0.5px 1.5px rgba(0, 0, 0, 0.16), 0px 1.5px 3.5px rgba(0, 0, 0, 0.12)',
    marginBottom: tokens.spacingInline.Nano,
  },
});
