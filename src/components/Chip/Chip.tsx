import React from 'react';
import { Chip as MuiChip, Box } from '@material-ui/core';
import { useClasses } from './styles';

export interface ChipProps {
  descricao: string | undefined;
  colorPrimary: string;
  background: string;
  chipIcon?: React.ReactElement;
  style?: Object;
}

const Chip: React.FC<ChipProps> = (props: ChipProps) => {
  const { descricao, colorPrimary, background, chipIcon, style } = props;

  const classes = useClasses();
  const chipLabel = (
    <Box
      style={{
        maxWidth: 180,
        display: 'flex',
      }}
    >
      <Box
        style={{
          display: 'block',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {descricao}
      </Box>
    </Box>
  );

  return (
    <MuiChip
      label={chipLabel}
      style={{
        color: colorPrimary,
        backgroundColor: background,
        ...style,
      }}
      classes={classes.chip}
      icon={chipIcon}
    />
  );
};

Chip.defaultProps = {
  chipIcon: undefined,
};

export { Chip };
