import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles({
  form: {
    boxShadow:
      '0px 0.5px 1.5px rgba(0, 0, 0, 0.16), 0px 1.5px 3.5px rgba(0, 0, 0, 0.12)',
    minHeight: 600,
    width: '80%',
    padding: tokens.spacingInline.Xs,
  },
});
