import React from 'react';
import { Box } from '@material-ui/core';

export interface IListHeader {
  footer?: React.ReactElement;
}

const FooterList: React.FC<IListHeader> = (props: IListHeader) => {
  const { footer } = props;

  return <Box>{footer}</Box>;
};

export { FooterList };
