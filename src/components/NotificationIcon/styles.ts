import { Badge, BadgeProps } from '@material-ui/core';
import { withProps } from '../../utils/hocs';

const ContentBadgeProps: BadgeProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
  variant: 'dot',
  color: 'secondary',
};

export const ContentBadge = withProps(ContentBadgeProps)(Badge);
