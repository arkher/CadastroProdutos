import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& tr': {
        [theme.breakpoints.only('xs')]: {
          borderBottom: `2px solid ${tokens.colorNeutral.Dark}`,
        },
      },
    },
  }),
);
