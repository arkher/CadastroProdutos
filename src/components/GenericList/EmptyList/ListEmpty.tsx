import React from 'react';
import { Box } from '@material-ui/core';

export interface ListEmptyProperties {
  emptyList: React.ReactElement;
}

const ListEmpty: React.FC<ListEmptyProperties> = (
  props: ListEmptyProperties,
) => {
  const { emptyList } = props;
  return <Box>{emptyList}</Box>;
};

export { ListEmpty };
