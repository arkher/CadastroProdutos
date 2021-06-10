import { createStyles, makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    divider: {
      display: 'flex',
    },
    formControl: {
      minWidth: 120,
      background: 'white',
    },
    inputLabel: {
      marginBottom: 4,
    },
    select: {
      display: 'flex',
      flex: 1,
      '& .MuiSelect-root': {
        backgroung: 'red',
      },
    },
    inputBusca: {
      display: 'flex',
      marginRight: tokens.spacingInline.Nano,
      marginLeft: tokens.spacingInline.Nano,
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
    },
    selectRoot: {
      display: 'flex',
      width: 200,
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
    outlinedInput: {
      paddingRight: tokens.spacingInline.Quark,
    },
    inputOption: {
      padding: tokens.spacingInline.Quark,
    },
    optionBox: {
      display: 'flex',
      alignItems: 'center',
    },
    filterIcon: {
      color: '#5D6A75',
      marginRight: tokens.spacingInline.Nano,
      backgroundColor: 'transparent',
    },
  }),
);
