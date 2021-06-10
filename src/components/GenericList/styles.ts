import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles({
  boxRoot: {
    overflowY: 'auto',
    height: '70vh',
    paddingTop: tokens.spacingInline.Xxxs,
  },
});
