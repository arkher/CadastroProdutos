import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { tokens } from '@layout/tokens';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    avatar: {
      backgroundColor: tokens.colorBrand.Base,
      color: tokens.colorNeutral.White,
    },
    avatarText: {
      color: tokens.colorNeutral.Dark,
    },
    itemIcon: {
      width: 42,
      minWidth: 42,
      color: tokens.colorNeutral.Dark,
    },
    itemText: {
      color: tokens.colorNeutral.Dark,
    },
    secondaryList: {
      paddingBottom: 0,
    },
  }),
);
