import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { NavItem } from '@/components/SideNavbar/styles';
import { navOptions } from '@/layout/base/data/nav-options';
import { systemNavOptions } from '@/layout/base/data/system-nav-options';
import { tokens } from '@/layout/tokens';
import { RootState } from '@/rootReducer';
import { getRolesFromKeycloak } from '@/utils/roles.utils';
import { ReactComponent as Logout } from '@assets/icons/logout-24px.svg';
import { ApplicationService } from '@services/Application.service';
import { useStyles } from './styles';

const DrawerContent: React.FC = () => {
  const roles = getRolesFromKeycloak();

  const systemOptions = systemNavOptions(roles);
  const options = navOptions(roles);

  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const getIniciais = (nomeCompleto: string) => {
    const splited = nomeCompleto?.split(' ');
    const iniciais = splited[0][0] + splited[splited.length - 1][0];
    return iniciais || 'US';
  };

  const { nome } = useSelector(
    (state: RootState) => state.usuarioState.usuario,
  );

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
      }}
    >
      <List>
        <Box className={classes.toolbar} />
        <ListItem style={{ paddingLeft: 8 }}>
          <ListItemIcon>
            <Avatar className={classes.avatar}>
              {getIniciais(nome || ' ')}
            </Avatar>
          </ListItemIcon>
          <ListItemText
            disableTypography
            className={classes.avatarText}
            primary={nome && `Bem-vindo, ${nome?.split(' ')[0]}`}
          />
        </ListItem>
        <Divider />
        {options.map(option => (
          <NavItem
            button
            key={`${option.route}`}
            onClick={() => history.push(option.route)}
            selected={option.route === location.pathname}
            disabled={option.disabled}
          >
            <ListItemIcon className={classes.itemIcon}>
              {option.icon}
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={option.title}
              className={classes.itemText}
            />
          </NavItem>
        ))}
      </List>
      <List className={classes.secondaryList}>
        <Divider />
        {systemOptions.map(option => (
          <ListItem
            button
            key={option.title}
            onClick={() => {
              history.push(option.route);
            }}
          >
            <ListItemIcon className={classes.itemIcon}>
              {option.icon}
            </ListItemIcon>
            <ListItemText primary={option.title} className={classes.itemText} />
          </ListItem>
        ))}

        <ListItem
          button
          key="sair_button"
          onClick={async () => {
            await ApplicationService.logout();
          }}
        >
          <ListItemIcon className={classes.itemIcon}>
            <Logout fill={tokens.colorNeutral.Dark} />
          </ListItemIcon>
          <ListItemText primary="Sair" className={classes.itemText} />
        </ListItem>
      </List>
    </div>
  );
};

export { DrawerContent };
