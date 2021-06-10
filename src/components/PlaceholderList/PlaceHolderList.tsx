import React from 'react';
import { Card as MuiCard, Grid } from '@material-ui/core';
import 'react-placeholder/lib/reactPlaceholder.css';
import { tokens } from '@/layout/tokens';

const PlaceholderList: React.FC = () => {
  const style = {
    width: '100%',
    height: '82px',
    marginBottom: '8px',
    background: tokens.colorNeutral.Light,
    animation: 'react-placeholder-pulse 1.5s infinite',
  };

  return (
    <Grid
      item
      style={{ overflow: 'auto', flex: 1 }}
      className="show-loading-animation"
    >
      <MuiCard className="show-loading-animation" style={style} />
      <MuiCard className="show-loading-animation" style={style} />
      <MuiCard className="show-loading-animation" style={style} />
      <MuiCard className="show-loading-animation" style={style} />
      <MuiCard className="show-loading-animation" style={style} />
    </Grid>
  );
};

export default PlaceholderList;
