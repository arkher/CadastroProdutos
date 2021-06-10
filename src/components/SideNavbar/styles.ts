import {
  Box,
  Drawer,
  ListItem,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import { compose } from 'redux';
import styled from 'styled-components';
import { tokens } from '@/layout/tokens';
import { buildActionColor } from '../../utils/theme';

export const Container = styled.div`
  width: 280px;
  height: 100%;
  background: #ffffff;
`;

export const FixedDrawer = withStyles(theme => ({
  paper: {
    position: 'fixed',
    width: theme.width.sideBar,

    zIndex: 0,
  },
}))(Drawer);

type NavItemProps = {
  disabled?: boolean;
  selected?: boolean;
};

const buildNavItemDisabledColor = buildActionColor('#DADADA');
const buildNavItemSelectedColor = buildActionColor('#0066B2');

const NavItemNormalColor = '#5D6A75';

const buildNavItemColor = (props: NavItemProps) =>
  compose(
    buildNavItemSelectedColor(Boolean(props.selected)),
    buildNavItemDisabledColor(Boolean(props.disabled)),
  )(NavItemNormalColor);

export const NavItem = withStyles({
  root: {
    height: 52,
    color: (props: NavItemProps) => buildNavItemColor(props),
    borderBottom: `2px solid ${tokens.colorNeutral.Lightest}`,
    '&$selected': {
      backgroundColor: 'rgba(229, 244, 255, 0.8)',
      borderRight: '2px solid #0066B2',
      cursor: 'default',
      '&:hover': {
        backgroundColor: 'rgba(229, 244, 255, 0.8)',
      },
    },
    '&$disabled': {
      color: 'rgba(93, 106, 117, 0.32)',
      cursor: 'not-allowed',
      pointerEvents: 'all',
      '&:hover': {
        backgroundColor: 'transparent',
      },
    },
  },
  selected: {},
  disabled: {},
})(ListItem);

export const NavItemText = withStyles({
  root: {
    marginLeft: 10,
  },
  primary: {
    fontFamily: `${tokens.fontFamily.Ff1}`,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
  },
})(ListItemText);

export const Logo = styled.img`
  margin-left: 24px;
`;

export const LogoContainer = withStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: `${theme.height.appBar}px`,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
  },
}))(Box);
