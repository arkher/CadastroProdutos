import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { tokens } from '../tokens';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      background: '#F7F7F7',
      height: '100vh',
    },
    appBar: {
      zIndex: 200,
      backgroundColor: '#fff',
      color: 'black',
    },
    content: {
      padding: theme.spacing(3),
      overflow: 'auto',
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1,
      padding: tokens.spacingInline.Xxxs,
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  }),
);
