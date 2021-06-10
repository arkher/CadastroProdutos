import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles({
  paginator: {
    justifyContent: 'center',
    padding: '10px',
    '& .MuiPaginationItem-root': {
      borderRadius: tokens.borderRadius.Sm,
      color: tokens.colorNeutral.Dark,
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      color: tokens.colorNeutral.White,
    },
    '& .MuiPaginationItem-icon': {
      color: tokens.supportHighLight2.Base,
    },
  },
});
