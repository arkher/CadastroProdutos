import React, { ReactElement, useState } from 'react';
import { Box, Paper } from '@material-ui/core';
import { CardHeader } from '@/components/CardHeader/CardHeader';
import { Stepper } from '@/components/Stepper/Stepper';
import { TextField } from '@/components/TextField/TextField';
import { TextInputTitle } from '@/components/TextInputTitle/TextInputTitle';
import { Title } from '@/components/Title/Title';
import BaseLayout from '@/layout/base/base.layout';
import { DadosGerais } from './DadosGerais/DadosGerais';
import { useStyles } from './styles';

const steps = [
  'Geral',
  'Logístico',
  'Fiscal',
  'Nutri',
  'Registro',
  'Espec.',
  'Mídias',
  'Info. Mateus',
  'Dados GC',
  'Dados Pricing',
  'Política Preço',
  'Bases',
];

export const RevisaoCadastro = (): ReactElement => {
  const [currentStep, setCurrentStep] = useState(5);

  const classes = useStyles();

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <BaseLayout>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <CardHeader>
          <Title>Revisão de Cadastro</Title>
          <Stepper currentStep={currentStep} steps={steps} />
        </CardHeader>
        <Paper className={classes.form}>
          <DadosGerais />
        </Paper>
      </Box>
    </BaseLayout>
  );
};
