import React from 'react';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import { itemsPerRoles } from '@/utils/roles.utils';

export type SystemNavOption = {
  title: string;
  icon: React.ReactElement;
  route: string;
};

export const systemNavOptions = (roles: string[]): SystemNavOption[] => {
  const menuOptionsPerRoles = [
    {
      key: 'base_user',
      value: [],
    },
    {
      key: 'dev',
      value: [
        {
          title: 'Playground',
          icon: <VideogameAssetIcon fontSize="default" />,
          route: '/playground',
        },
      ],
    },
  ];

  return itemsPerRoles<SystemNavOption>(roles, menuOptionsPerRoles);
};
