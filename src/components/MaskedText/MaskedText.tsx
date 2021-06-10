/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import MaskedInput from 'react-text-mask';

interface MaskedTextProps {
  inputRef: (ref: HTMLInputElement | null) => void;
  type: 'cpf' | 'numero' | 'cnpj';
}

const masks = {
  cpf: [
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
  cnpj: [
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '.',
    /\d/,
    /\d/,
    /\d/,
    '/',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
  ],
};

export function MaskedTextCpf(props: MaskedTextProps): React.ReactElement {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={masks.cpf}
    />
  );
}

export function MaskedTextCnpj(props: MaskedTextProps): React.ReactElement {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={masks.cnpj}
    />
  );
}
