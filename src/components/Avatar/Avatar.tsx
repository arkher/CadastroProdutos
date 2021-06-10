import React, { ReactElement } from 'react';
import { getIniciais } from '@/utils/string.utils';
import { UserAvatar } from './styles';

type AvatarProps = {
  name: string;
  size?: number;
};

export const Avatar = ({ name, size }: AvatarProps): ReactElement => (
  <UserAvatar
    style={size ? { height: size, width: size, fontSize: size / 2 } : {}}
  >
    {getIniciais(name)}
  </UserAvatar>
);

Avatar.defaultProps = {
  size: undefined,
};
