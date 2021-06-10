import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export interface IListHeader {
  header: React.ReactElement;
  buttonComponent?: React.ReactElement;
}

const HeaderList: React.FC<IListHeader> = (props: IListHeader) => {
  const classes = useStyles();
  const { header } = props;
  return <Box className={classes.root}>{header}</Box>;
};

export { HeaderList };
