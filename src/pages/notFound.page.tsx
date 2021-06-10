import * as React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { ArrowBackRounded } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { tokens } from '../layout/tokens';

const NotFound: React.FC = () => {
  const history = useHistory();
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '550px',
            height: '400px',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h1"
            style={{ color: tokens.colorBrand.Base, marginBottom: 16 }}
          >
            404
          </Typography>
          <Typography
            variant="h5"
            style={{ textAlign: 'center', marginBottom: 16 }}
          >
            Desculpe, mas não conseguimos encontrar a página que você estava
            procurando
          </Typography>
          <Button
            color="primary"
            startIcon={<ArrowBackRounded />}
            onClick={() => {
              history.push('/');
            }}
          >
            Voltar para o início
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { NotFound };
