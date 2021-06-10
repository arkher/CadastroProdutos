import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  tabItem: {
    background: '#ffffff',
    margin: '0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'left',
    height: '48px',
  },
  tabItemBoxActive: {
    paddingLeft: '16px',
    paddingRight: '8px',
    width: '100%',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#0066b2',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  tabItemBoxInactive: {
    paddingLeft: '16px',
    paddingRight: '8px',
    width: '100%',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#B4BBC2',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
});