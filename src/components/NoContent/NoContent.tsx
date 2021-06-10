import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

interface Props {
  text: string;
}

function NoContent(props: Props): React.ReactElement {
  const { text } = props;
  const classes = useStyles();

  return <Box className={classes.box}>{text}</Box>;
}

export default NoContent;
