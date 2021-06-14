import React from 'react';
import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core';
import { tokens } from '@/layout/tokens';
import { useClasses } from './styles';

type Props = Partial<TextFieldProps> &
  Partial<{
    enableHelperTextCounter?: boolean;
    maxLength?: number;
    minLength?: number;
  }>;

const TextField: React.FC<Props> = (props: Props) => {
  const { maxLength, value, minLength, enableHelperTextCounter } = props;
  const strValue = value as string;
  return (
    <MuiTextField
      {...props}
      helperText={
        enableHelperTextCounter &&
        maxLength &&
        `${strValue?.length || 0}/${maxLength}`
      }
      inputProps={{
        minLength: minLength || 0,
        maxLength,
      }}
      FormHelperTextProps={{
        style: {
          textAlign: 'right',
          color:
            strValue?.length === maxLength
              ? tokens.supportHighLight1.Dark
              : 'rgba(0, 0, 0, 0.54)',
        },
      }}
      classes={useClasses().textInput}
    />
  );
};

TextField.defaultProps = {
  variant: 'outlined',
};

export { TextField };
