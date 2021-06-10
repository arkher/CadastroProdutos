import { makeStyles } from '@material-ui/core';
import { tokens } from '../../layout/tokens';

export const useStyles = makeStyles({
  root: {
    '&.MuiButton-contained': {
      border: `solid 1px ${tokens.colorBrand.Base}`,
    },
    '&.MuiButton-outlined': {
      border: `solid 2px ${tokens.colorBrand.Base}`,
      '&:hover': {
        border: `solid 2px ${tokens.colorBrand.Base}`,
      },
    },
  },
});
