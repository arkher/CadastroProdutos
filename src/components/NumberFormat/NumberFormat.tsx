import React from 'react';
import NumberFormat, { FormatInputValueFunction } from 'react-number-format';

interface NumberFormatCustomProps {
  inputRef: (instance: NumberFormat | null) => void;
  onChange: (event: { target: { value: string } }) => void;
}

const currencyFormatter: FormatInputValueFunction = (value: string) => {
  if (!Number(value)) return '';

  const amount = new Intl.NumberFormat('pt-BR', {
    style: 'decimal',
    currency: 'BRL',
    minimumFractionDigits: 2,
  }).format(Number(value) / 100);

  return `${amount}`;
};

function NumberFormatCustom(
  props: NumberFormatCustomProps,
): React.ReactElement {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      maxLength={20}
      getInputRef={inputRef}
      onValueChange={values => {
        onChange({
          target: {
            value: `${Number(values.value) / 100}`,
          },
        });
      }}
      format={currencyFormatter}
    />
  );
}

export default NumberFormatCustom;
