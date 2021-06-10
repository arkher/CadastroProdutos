import { Badge, BadgeProps, withStyles } from '@material-ui/core';
import { compose } from 'redux';
import { withProps } from '../../utils/hocs';
import { OnlineBadgeStyle } from './styles';

const OnlineBadgeProps: BadgeProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'right',
  },
  variant: 'dot',
  color: 'secondary',
};

export const OnlineBadge = compose(
  withStyles(OnlineBadgeStyle),
  withProps(OnlineBadgeProps),
)(Badge);
