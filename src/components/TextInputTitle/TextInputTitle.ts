import { Box, withStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const TextInputTitle = withStyles({
  root: {
    paddingTop: tokens.spacingInline.Xxs,
    paddingBottom: tokens.spacingInline.Nano,
    fontSize: tokens.fontSize.Xxxs,
    fontWeight: 500,
  },
})(Box);
