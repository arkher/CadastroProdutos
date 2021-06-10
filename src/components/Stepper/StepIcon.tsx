import React, { ReactElement } from 'react';
import { Box, StepIconProps } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useStyles } from './styles';

function StepIcon(props: StepIconProps): ReactElement {
  const { active, completed } = props;

  const classes = useStyles({ active: active || false });

  return (
    <Box className={classes.root}>
      {completed ? (
        <CheckCircleIcon className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </Box>
  );
}

export default StepIcon;
