import React from 'react';
import { Avatar } from '@material-ui/core';
import { OnlineBadge } from '../OnlineBadge/OnlineBadge';
import { Container } from './styles';

export interface UserAvatarProps {
  online?: boolean;
}

export const UserAvatar: React.FC<UserAvatarProps> = () => {
  return (
    <Container>
      <OnlineBadge>
        <Avatar alt="User" src="asd" />
      </OnlineBadge>
    </Container>
  );
};
