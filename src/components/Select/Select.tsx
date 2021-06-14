import React, { ReactElement } from 'react';
import {
  Box,
  MenuItem,
  Select as MuiSelect,
  SelectProps,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from './styles';

type Props = {
  options: string[];
} & SelectProps;

export const Select = (props: Props): ReactElement => {
  const { value, onChange, options } = props;
  const classes = useStyles();

  return (
    <MuiSelect value={value} onChange={onChange} IconComponent={ExpandMoreIcon}>
      {options.map((item, index) => (
        <MenuItem value={item} key={index.toString()}>
          <Box className={classes.optionBox}>{item}</Box>
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
