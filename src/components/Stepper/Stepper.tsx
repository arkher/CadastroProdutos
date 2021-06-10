import React, { ReactElement } from 'react';
import { Step, StepLabel, Stepper } from '@material-ui/core';
import StepIcon from './StepIcon';
import { useStyles } from './styles';

type StepperProps = {
  currentStep: number;
  steps: string[];
};

export const CustomStepper = ({
  currentStep,
  steps,
}: StepperProps): ReactElement => {
  const classes = useStyles({});
  return (
    <Stepper
      activeStep={currentStep}
      alternativeLabel
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      {steps.map(label => (
        <Step key={label}>
          <StepLabel StepIconComponent={StepIcon} className={classes.stepLabel}>
            {label}
          </StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export { CustomStepper as Stepper };
