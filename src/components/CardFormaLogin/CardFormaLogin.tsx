import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { ArrowForwardRounded, SvgIconComponent } from '@material-ui/icons';
import { useStyles } from './styles';

export type CardFormaLoginProps = {
  descricao: string;
  Icon: SvgIconComponent;
} & Partial<CardFormaLoginOptionalProps>;

type CardFormaLoginOptionalProps = {
  onClick: () => void;
};

const CardFormaLogin = (props: CardFormaLoginProps): React.ReactElement => {
  const { descricao, Icon, onClick } = props;

  const classes = useStyles();

  return (
    <Box onClick={onClick}>
      <Grid item className={classes.loginCard}>
        <Box style={{ display: 'flex', flex: 1 }}>
          <Icon className={classes.typeIcon} />
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Typography className={classes.loginTypeText}>{descricao}</Typography>
          <ArrowForwardRounded className={classes.typeIcon} />
        </Box>
      </Grid>
    </Box>
  );
};

export { CardFormaLogin };
