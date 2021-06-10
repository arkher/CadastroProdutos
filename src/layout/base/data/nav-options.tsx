import React from 'react';
import {
  BorderColorRounded,
  ErrorRounded,
  GavelRounded,
  ImportContacts,
  SupervisorAccountRounded,
} from '@material-ui/icons';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import GestureRoundedIcon from '@material-ui/icons/GestureRounded';
import { itemsPerRoles } from '@/utils/roles.utils';
import { SideNavbarOptions } from '../../../components';

export const navOptions = (roles: string[]): SideNavbarOptions => {
  const menuOptionsPerRoles = [
    {
      key: 'assinante',
      value: [
        {
          title: 'Pendentes',
          icon: <BorderColorRounded />,
          route: '/meus-contratos/pra-assinar',
        },
        {
          title: 'Assinados',
          icon: <CheckCircleRoundedIcon />,
          route: '/meus-contratos/assinados',
        },
        {
          title: 'Todos',
          icon: <ImportContacts />,
          route: '/meus-contratos',
        },
      ],
    },
    {
      key: 'auditor',
      value: [
        {
          title: 'Pendentes',
          icon: <GavelRounded fontSize="default" />,
          route: '/auditoria',
        },
        {
          title: 'Todos',
          icon: <ImportContacts fontSize="default" />,
          route: '/contratos',
        },
        {
          title: 'Títulos gerados',
          icon: <CheckCircleRoundedIcon fontSize="default" />,
          route: '/contratos/aprovados',
        },
        {
          title: 'Reprovados',
          icon: <ErrorRounded fontSize="default" />,
          route: '/contratos/reprovados',
        },
      ],
    },
    {
      key: 'comercial',
      value: [
        {
          title: 'Solicitações de Acesso',
          icon: <SupervisorAccountRounded fontSize="default" />,
          route: '/solicitacoes-acesso',
        },
      ],
    },
    {
      key: 'dev',
      value: [
        {
          title: 'Playground',
          icon: <GestureRoundedIcon fontSize="default" />,
          route: '/playground',
        },
      ],
    },
  ];

  return itemsPerRoles(roles, menuOptionsPerRoles);
};
