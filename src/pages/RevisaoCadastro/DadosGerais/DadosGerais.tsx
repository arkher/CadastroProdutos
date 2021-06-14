import React, { ChangeEvent, ReactElement, useState } from 'react';
import {
  Box,
  FormControl,
  TextField as MuiTextField,
  TextFieldProps,
} from '@material-ui/core';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';
import { RadioGroup } from '@/components';
import { Select } from '@/components/Select/Select';
import { TextField } from '@/components/TextField/TextField';
import { TextInputTitle } from '@/components/TextInputTitle/TextInputTitle';
import { Title } from '@/components/Title/Title';
import { tokens } from '@/layout/tokens';
import { useStyles, useStylesAutocomplete, useStylesTextfield } from './styles';

const departamentos = ['Dept 1', 'Dept 2', 'Dept 3'];
const secoes = ['Secao 1', 'Secao 2', 'Secao 3'];
const marcas = [
  { id: 1, descricao: 'Marca 1' },
  { id: 2, descricao: 'Marca 2' },
  { id: 3, descricao: 'Marca 3' },
];

type Marca = {
  id: number;
  descricao: string;
};

export const DadosGerais = (): ReactElement => {
  const [codigoBarras, setCodigoBarras] = useState('');
  const [departamento, setDepartamento] = useState('');
  const [secao, setSecao] = useState('');
  const [descricaoDetalhada, setDescricaoDetalhada] = useState('');
  const [descricaoResumida, setDescricaoResumida] = useState('');
  const [descricaoPdv, setDescricaoPdv] = useState('');
  const [descricaoEcommerce, setDescricaoEcommerce] = useState('');
  const [descritivoEcommerce, setDescritivoEcommerce] = useState('');
  const [marca, setMarca] = useState<undefined | Marca>(undefined);
  const [seloInmetro, setSeloInmetro] = useState('sim');

  const handleCodigoBarrasChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const value = event.target.value.replace(/\D/g, '');
    setCodigoBarras(value);
  };

  const handleDescricaoDetalhadaChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescricaoDetalhada(event.target.value);
  };

  const handleDescricaoResumidaChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescricaoResumida(event.target.value);
  };

  const handleDescricaoPdvChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescricaoPdv(event.target.value);
  };

  const handleDescricaoEcommerceChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescricaoEcommerce(event.target.value);
  };

  const handleDescritivoEcommerceChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescritivoEcommerce(event.target.value);
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

  const handleChangeMarca = (
    e: React.ChangeEvent<{}>,
    v: string | Marca | undefined | null,
  ) => {
    if (v && typeof v !== 'string') {
      setMarca(v);
    }
  };

  const classes = useStyles();
  const classesAutocomplete = useStylesAutocomplete();
  const classesTextField = useStylesTextfield();
  const maxLengthCodigoBarras = 32;
  const maxLengthDescricaoDetalhada = 300;
  const maxLengthDescricaoResumida = 40;
  const maxLengthDescricaoPdv = 20;
  const maxLengthDescricaoEcommerce = 255;
  const maxLengthDescritivoEcommerce = 4000;

  return (
    <Box
      style={{
        width: '60%',
        overflowY: 'scroll',
        height: '100%',
        paddingRight: tokens.spacingInline.Xxs,
      }}
    >
      <Title>Dados Gerais</Title>
      <Box>
        <TextInputTitle>Código de Barras</TextInputTitle>
        <TextField
          fullWidth
          value={codigoBarras}
          enableHelperTextCounter
          maxLength={maxLengthCodigoBarras}
          onChange={handleCodigoBarrasChange}
          className={classes.input}
        />

        <TextInputTitle>Departamento</TextInputTitle>
        <FormControl variant="outlined" className={classes.selectRoot}>
          <Select
            value={departamento}
            onChange={handleChangeDepartamento}
            options={departamentos}
          />
        </FormControl>

        <TextInputTitle>Seção</TextInputTitle>
        <FormControl variant="outlined" className={classes.selectRoot}>
          <Select value={secao} onChange={handleChangeSecao} options={secoes} />
        </FormControl>

        <TextInputTitle>Descrição Detalhada</TextInputTitle>
        <TextField
          rows={5}
          value={descricaoDetalhada}
          multiline
          enableHelperTextCounter
          maxLength={maxLengthDescricaoDetalhada}
          onChange={handleDescricaoDetalhadaChange}
          className={classes.multilineTextField}
        />

        <TextInputTitle>Descrição Resumida do Produto</TextInputTitle>
        <TextField
          enableHelperTextCounter
          fullWidth
          value={descricaoResumida}
          maxLength={maxLengthDescricaoResumida}
          onChange={handleDescricaoResumidaChange}
          className={classes.input}
        />

        <TextInputTitle>Descrição p/PDV & CUPOM</TextInputTitle>
        <TextField
          enableHelperTextCounter
          fullWidth
          value={descricaoPdv}
          maxLength={maxLengthDescricaoPdv}
          onChange={handleDescricaoPdvChange}
          className={classes.input}
        />

        <TextInputTitle>
          Descrição Completa do Produto p/E-Commerce
        </TextInputTitle>
        <TextField
          rows={5}
          multiline
          enableHelperTextCounter
          value={descricaoEcommerce}
          maxLength={maxLengthDescricaoEcommerce}
          onChange={handleDescricaoEcommerceChange}
          className={classes.multilineTextField}
        />

        <TextInputTitle>Descritivo do Produto p/E-Commerce</TextInputTitle>
        <TextField
          rows={10}
          multiline
          enableHelperTextCounter
          value={descritivoEcommerce}
          maxLength={maxLengthDescritivoEcommerce}
          onChange={handleDescritivoEcommerceChange}
          className={classes.multilineTextField}
        />

        <TextInputTitle>Marca</TextInputTitle>
        <MuiAutocomplete
          options={marcas}
          getOptionLabel={option => option.descricao}
          loadingText="Carregando..."
          disableClearable
          noOptionsText="Sem opções"
          freeSolo
          renderInput={(params: TextFieldProps) => {
            return (
              <MuiTextField
                {...params}
                variant="outlined"
                className={classesTextField.root}
              />
            );
          }}
          onChange={handleChangeMarca}
        />

        <TextInputTitle>Selo Inmetro/Anvisa</TextInputTitle>
        <RadioGroup
          key="signature"
          items={[
            { value: 'sim', label: 'sim' },
            { value: 'não', label: 'não' },
          ]}
          name="radioGroupOpcoesAssinatura"
          selectedValue={seloInmetro}
          onChange={selectedValue => {
            setSeloInmetro(selectedValue);
          }}
        />
      </Box>
    </Box>
  );
};
