import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles({
  dialogCloseIcon: {
    padding: 0,
  },
  dialogTitleText: {
    padding: tokens.spacingInline.Xxs,
    paddingBottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: tokens.fontSize.Sm,
    '& h2': {
      fontWeight: 'normal',
      color: `${tokens.colorNeutral.Darkest}`,
    },
  },
  dialogActions: {
    padding: tokens.spacingInline.Xxs,
  },
});
