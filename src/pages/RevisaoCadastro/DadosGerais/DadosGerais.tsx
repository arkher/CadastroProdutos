import React, { ChangeEvent, ReactElement, useState } from 'react';
import { Box, FormControl, MenuItem, Select } from '@material-ui/core';
import { TextField } from '@/components/TextField/TextField';
import { TextInputTitle } from '@/components/TextInputTitle/TextInputTitle';
import { Title } from '@/components/Title/Title';
import { tokens } from '@/layout/tokens';
import { useStyles } from './styles';

const departamentos = ['Dept 1', 'Dept 2', 'Dept 3'];
const secoes = ['Secao 1', 'Secao 2', 'Secao 3'];

export const DadosGerais = (): ReactElement => {
  const [codigoBarras, setCodigoBarras] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [secao, setSecao] = useState('');

  const handleCodigoBarrasChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value.replace(/\D/g, '');
    setCodigoBarras(value);
  };

  const handleChangeDepartamento = (
    event: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>,
  ) => {
    setDepartamento((event.target.value as unknown) as string);
  };

  const handleChangeSecao = (
    event: React.ChangeEvent<{
      name?: string;
      value: unknown;
    }>,
  ) => {
    setSecao((event.target.value as unknown) as string);
  };

  const classes = useStyles();
  const maxLength = 32;

  return (
    <>
      <Title>Dados Gerais</Title>
      <Box
        style={{
          width: '60%',
        }}
      >
        <TextInputTitle>Código de Barras</TextInputTitle>
        <TextField
          fullWidth
          value={codigoBarras}
          helperText={`${codigoBarras?.length || 0}/${maxLength}`}
          inputProps={{
            minLength: 5,
            maxLength,
          }}
          FormHelperTextProps={{
            style: {
              textAlign: 'right',
              color:
                codigoBarras?.length === maxLength
                  ? tokens.supportHighLight1.Dark
                  : 'rgba(0, 0, 0, 0.54)',
            },
          }}
          onChange={handleCodigoBarrasChange}
          className={classes.input}
        />

        <TextInputTitle>Departamento</TextInputTitle>
        <FormControl variant="outlined" className={classes.selectRoot}>
          <Select value={departamento} onChange={handleChangeDepartamento}>
            {departamentos.map((item, index) => (
              <MenuItem value={item} key={index.toString()}>
                <Box className={classes.optionBox}>{item}</Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextInputTitle>Seção</TextInputTitle>
        <FormControl variant="outlined" className={classes.selectRoot}>
          <Select value={secao} onChange={handleChangeSecao}>
            {secoes.map((item, index) => (
              <MenuItem value={item} key={index.toString()}>
                <Box className={classes.optionBox}>{item}</Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};
