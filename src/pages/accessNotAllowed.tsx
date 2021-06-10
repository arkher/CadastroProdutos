import * as React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { ArrowBackRounded } from '@material-ui/icons';
import { ReactComponent as SecureLogin } from '@/assets/images/secure-login.svg';
import { ApplicationService } from '@/services/Application.service';

const AccessNotAllowed: React.FC = () => {
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
      <SecureLogin height="40vh" />
      <Box
        style={{
          width: '60vh',
        }}
      >
        <Typography variant="h5" style={{ textAlign: 'center', margin: 16 }}>
          Desculpe, você não tem permissão para visualizar este conteúdo.
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
        startIcon={<ArrowBackRounded />}
        onClick={() => {
          ApplicationService.logout();
        }}
      >
        Voltar
      </Button>
    </Box>
  );
};

export { AccessNotAllowed };
