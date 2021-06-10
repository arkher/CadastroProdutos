import React from 'react';
import { useTheme } from '@material-ui/core';
import {
  ArrowDropDown,
  ExitToAppRounded,
  PersonRounded,
  SettingsRounded,
} from '@material-ui/icons';
import clsx from 'clsx';
import { ReactComponent as Logo } from '@assets/icons/svg/logo-mateus.svg';
import { ApplicationService } from '@services/Application.service';
import { DropdownMenu, DropdownMenuOption } from '../DropdownMenu/DropdownMenu';
import { NotificationIcon } from '../NotificationIcon/NotificationIcon';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import {
  Container,
  Info,
  NavSection,
  UserSection,
  UserSectionItem,
  useStyles,
} from './styles';

type NavBarProps = {
  withDrawer?: boolean;
};

const Navbar: React.FC<NavBarProps> = (props: Partial<NavBarProps>) => {
  const theme = useTheme();
  const { withDrawer } = props;
  const renderOptionsIcon = () => (
    <ArrowDropDown fontSize="large" style={{ color: '#5D6A75' }} />
  );

  const avatarMenuOptions: DropdownMenuOption[] = [
    {
      title: 'Perfil',
      icon: <PersonRounded style={{ marginRight: 16 }} />,
      onClick: () => null,
    },
    {
      title: 'Configurações',
      icon: <SettingsRounded style={{ marginRight: 16 }} />,
      onClick: () => null,
    },
    {
      title: 'Logout',
      icon: <ExitToAppRounded style={{ marginRight: 16 }} />,
      onClick: async () => {
        await ApplicationService.logout();
      },
    },
  ];

  const renderNotificationIcon = () => <NotificationIcon contentCount={0} />;

  const classes = useStyles({
    drawerWidth: theme.width.sideBar,
    displayMenu: withDrawer,
  });

  return (
    <Container
      height={theme.height.appBar}
      drawer={withDrawer ? theme.width.sideBar : undefined}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: withDrawer,
      })}
    >
      <NavSection>
        <Logo />
      </NavSection>
      <Info>Pré-Cadastro de Produtos</Info>
      <UserSection>
        <UserSectionItem>
          <DropdownMenu
            renderIcon={renderNotificationIcon}
            buttonSize="medium"
            noOptionsText="Sem notificações"
          />
        </UserSectionItem>
        <UserSectionItem>
          <UserAvatar />
          <DropdownMenu
            options={avatarMenuOptions}
            renderIcon={renderOptionsIcon}
          />
        </UserSectionItem>
      </UserSection>
    </Container>
  );
};

export { Navbar };
