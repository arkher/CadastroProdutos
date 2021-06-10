import React from 'react';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ContentBadge } from './styles';

export interface NotificationIconProps {
  contentCount: number;
}

export const NotificationIcon: React.FC<NotificationIconProps> = ({
  contentCount,
}) => {
  return (
    <ContentBadge badgeContent={contentCount}>
      <NotificationsIcon fontSize="large" />
    </ContentBadge>
  );
};
