import { Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { tokens } from '@layout/tokens';

export const UserAvatar = withStyles({
  root: {
    backgroundColor: tokens.colorBrand.Base,
    color: tokens.colorNeutral.White,
  },
})(Avatar);
