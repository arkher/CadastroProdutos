import { makeStyles } from '@material-ui/core';
import { tokens } from '@/layout/tokens';

type Props = {
  active?: boolean;
};

export const useStyles = makeStyles({
  root: {
    color: (props: Props) =>
      props.active ? tokens.colorBrand.Base : '#eaeaf0',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '50%',
    height: 24,
    width: 24,
    alignItems: 'center',
    boxShadow:
      '0px 0.5px 1.5px rgba(0, 0, 0, 0.16), 0px 1.5px 3.5px rgba(0, 0, 0, 0.12)',
    '& .QontoStepIcon-completedIcon': {
      color: tokens.colorBrand.Base,
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  },
  stepLabel: {
    '& .MuiStepLabel-active': {
      color: tokens.colorBrand.Base,
    },
    '& .MuiStepLabel-completed': {
      color: tokens.colorBrand.Base,
    },
  },
});
