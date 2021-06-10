import React from 'react';
import { IconButton, List } from '@material-ui/core';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useHistory, useLocation } from 'react-router-dom';
import MateusLogo from '../../assets/icons/svg/logo-mateus.svg';
import {
  FixedDrawer,
  Logo,
  LogoContainer,
  NavItem,
  NavItemText,
} from './styles';

export type SideNavbarOption = {
  title: string;
  icon: React.ReactElement;
  disabled?: boolean;
  route: string;
};

export type SideNavbarOptions = SideNavbarOption[];

export interface SideNavbarProps {
  options: SideNavbarOptions;
  open: boolean;
  handleDrawer: () => void;
}
export const SideNavbar: React.FC<SideNavbarProps> = ({
  options,
  open,
  handleDrawer,
}) => {
  const location = useLocation();
  const history = useHistory();

  const renderSideNavOptions = () => (
    <List disablePadding>
      <LogoContainer>
        <Logo alt="Mateus" src={MateusLogo} />
        <IconButton style={{ marginRight: '16px' }} onClick={handleDrawer}>
          <ArrowBackIosRoundedIcon />
        </IconButton>
      </LogoContainer>
      {options.map(option => (
        <NavItem
          onClick={() => history.push(option.route)}
          button
          selected={option.route === location.pathname}
          disabled={option.disabled}
          key={option.title}
        >
          {option.icon}
          <NavItemText primary={option.title} />
        </NavItem>
      ))}
    </List>
  );

  return (
    <FixedDrawer elevation={0} open={open} anchor="left" variant="persistent">
      {renderSideNavOptions()}
    </FixedDrawer>
  );
};
