import React from 'react';
import { Box, CssBaseline, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { Navbar } from '@/components';
import packageJson from '../../../package.json';
import { tokens } from '../tokens';
import { useStyles } from './base.styles';

export interface BaseLayoutProps {
  children?: JSX.Element;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const classes = useStyles({});

  return (
    <Box component="div" className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Navbar />
      </AppBar>
      <Box component="main" className={classes.content}>
        <Box component="div" className={classes.toolbar} />
        <Box style={{ display: 'flex', flexDirection: 'column' }}>
          {children}
          <Typography
            style={{
              position: 'fixed',
              right: 10,
              bottom: 10,
              color: tokens.colorNeutral.Base,
              fontSize: tokens.fontSize.Details,
            }}
          >
            {packageJson.version}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BaseLayout;
