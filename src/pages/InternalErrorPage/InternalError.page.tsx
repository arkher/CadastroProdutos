import * as React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { ReactComponent as InternalErrorSvg } from '@/assets/images/internal-error.svg';

const InternalError = (): React.ReactElement => {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        height: '100vh',
      }}
    >
      <InternalErrorSvg height="40vh" />
      <Box
        style={{
          width: '60vh',
        }}
      >
        <Typography variant="h5" style={{ textAlign: 'center', margin: 16 }}>
          Desculpe, ocorreu um problema interno.
        </Typography>
        <Typography
          variant="h5"
          style={{ textAlign: 'center', margin: 16, fontSize: 18 }}
        >
          Entre em contato com o controle de acesso.
        </Typography>
      </Box>
      <Button
        style={{ alignSelf: 'center' }}
        color="primary"
        onClick={() => {
          window.location.href = '/';
        }}
      >
        Retornar à tela principal
      </Button>
    </Box>
  );
};

export { InternalError };
