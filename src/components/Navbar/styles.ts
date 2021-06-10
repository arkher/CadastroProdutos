import { createStyles, makeStyles, Theme } from '@material-ui/core';
import styled from 'styled-components';
import { tokens } from '@/layout/tokens';

export const Container = styled.div<{
  height: number;
  drawer: number | undefined;
}>`
  height: ${props => props.height}px;
  width: ${props => (props.drawer ? `calc(100% - ${props.drawer}px)` : '100%')};
  background-color: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  margin-left: ${props => (props.drawer ? `${props.drawer}px` : null)};
  z-index: 1;
  top: 0;
`;

export const NavSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  padding-left: ${tokens.spacingInline.Xxxs}px;
`;

export const Info = styled.span`
  margin-left: 100px;
  font-family: ${tokens.fontFamily.Ff1};
  font-style: normal;
  font-weight: 600;
  display: flex;
  font-size: 20px;
  min-width: 200px;
`;

export const UserSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const UserSectionItem = styled.div`
  padding: 4px 0px 4px 8px;
`;

type styleProps = {
  drawerWidth: number;
  displayMenu: boolean | undefined;
};

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: (props: styleProps) => ({
      width: `calc(100% - ${props.drawerWidth}px)`,
      marginLeft: props.drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    iconMenu: (props: styleProps) => ({
      display: props.displayMenu ? 'show' : 'none',
    }),
  }),
);
