import React from 'react';
import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core';
import { useClasses } from './styles';

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return <MuiTextField {...props} classes={useClasses().textInput} />;
};

TextField.defaultProps = {
  variant: 'outlined',
};

export { TextField };
