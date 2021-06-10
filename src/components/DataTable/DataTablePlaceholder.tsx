import React from 'react';
import { Box } from '@material-ui/core';
import { tokens } from '@/layout/tokens';
import 'react-placeholder/lib/reactPlaceholder.css';

const style = {
  background: tokens.colorNeutral.Light,
  animation: 'react-placeholder-pulse 1.5s infinite',
};
function DataTablePlaceholder(): React.ReactElement {
  return (
    <Box
      style={{
        ...style,
        height: 128,
        marginBottom: tokens.spacingInline.Quark,
        marginTop: tokens.spacingInline.Nano,
      }}
    >
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
      <Box
        style={{
          ...style,
          height: 64,
          marginBottom: tokens.spacingInline.Quark,
        }}
      />
    </Box>
  );
}

export default DataTablePlaceholder;
