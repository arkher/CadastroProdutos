import React from 'react';
import { CardContent as MuiCardContent, Grid } from '@material-ui/core';
import { ConteudoStyle, TituloStyle } from './styles';

export interface CardContentProps {
  titulo: string;
  conteudo?: React.ReactNode;
  style?: React.CSSProperties;
}

const CardField: React.FC<CardContentProps> = (props: CardContentProps) => {
  const { titulo, conteudo, style } = props;

  return (
    <MuiCardContent
      style={{ paddingTop: '8px', paddingBottom: '8px', ...style }}
    >
      <Grid item>
        <TituloStyle>{titulo}</TituloStyle>
      </Grid>
      <ConteudoStyle>{conteudo}</ConteudoStyle>
    </MuiCardContent>
  );
};

export { CardField };
