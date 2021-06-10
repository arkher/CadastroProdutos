import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { tokens } from '@/layout/tokens';
import { ReactComponent as Papper } from '../../assets/images/papers.svg';
import { useStyles } from './styles';

export interface EmptyListProps {
  mensagem: string;
}

export const EmptyList = (
  props: EmptyListProps,
): React.ReactElement<EmptyListProps> => {
  const classes = useStyles();
  const { mensagem } = props;

  return (
    <Grid className={classes.card}>
      <Papper style={{ width: '172px', height: '172px' }} />
      <Typography
        style={{
          fontSize: tokens.fontSize.Sm,
          color: tokens.colorNeutral.Dark,
        }}
      >
        {mensagem}
      </Typography>
    </Grid>
  );
};
