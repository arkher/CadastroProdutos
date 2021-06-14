import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles({
  selectRoot: {
    display: 'flex',
    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
      borderBottom: `2px solid ${tokens.colorNeutral.Base}`,
      borderTop: `2px solid ${tokens.colorNeutral.Base}`,
      borderRight: `2px solid ${tokens.colorNeutral.Base}`,
      borderLeft: `2px solid ${tokens.colorNeutral.Base}`,
    },
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderBottom: `2px solid ${tokens.colorBrand.Base}`,
      borderTop: `2px solid ${tokens.colorBrand.Base}`,
      borderRight: `2px solid ${tokens.colorBrand.Base}`,
      borderLeft: `2px solid ${tokens.colorBrand.Base}`,
    },
    '& .MuiInputBase-root': {
      paddingRight: 0,
      height: 48,
    },
    '& .MuiSelect-root': {
      background: 'white',
    },
  },
  optionBox: {
    display: 'flex',
    alignItems: 'center',
  },
});
