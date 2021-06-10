import {
  Box,
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core';
import styled from 'styled-components';
import { tokens } from '../tokens';

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

export const Content = withStyles(theme => ({
  root: {
    position: 'relative',
    padding: '24px 16px 0px 36px',
    backgroundColor: `${tokens.colorNeutral.Lightest}`,
    top: theme.height.appBar,
    width: `calc(100% - ${theme.width.sideBar}px)`,
    height: `calc(100% - ${theme.height.appBar}px)`,
  },
}))(Box);

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      transition: theme.transitions.create(['left', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      left: 0,
      width: '100%',
    },
    contentWithDrawer: {
      transition: theme.transitions.create(['left', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      left: theme.width.sideBar,
      width: `calc(100% - ${theme.width.sideBar}px)`,
    },
  }),
);
