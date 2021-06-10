import { Typography, withStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const Title = withStyles({
  root: {
    fontWeight: 600,
    fontSize: tokens.fontSize.Sm,
  },
})(Typography);
