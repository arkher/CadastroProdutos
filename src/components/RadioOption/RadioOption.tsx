import React from 'react';
import {
  FormControlLabel,
  FormControlLabelProps,
  Radio,
  RadioProps,
} from '@material-ui/core';
import { useClasses, useStyles } from './styles';

export type RadioOptionProps = RadioProps & Partial<FormControlLabelProps>;
// clsx
const RadioOption: React.FC<RadioOptionProps> = (props: RadioOptionProps) => {
  const { label, value, checked, disabled, style, labelPlacement } = props;
  const classes = useClasses(props);
  const formLabelControlClasses = useStyles();

  return (
    <FormControlLabel
      value={value}
      label={label}
      control={<Radio classes={classes.radio} />}
      labelPlacement={labelPlacement}
      checked={checked}
      disabled={disabled}
      style={style}
      color="primary"
    />
  );
};

RadioOption.defaultProps = {
  checked: false,
  disabled: false,
  style: {
    width: '100%',
  },
  labelPlacement: 'start',
  color: 'primary',
};

export { RadioOption };
