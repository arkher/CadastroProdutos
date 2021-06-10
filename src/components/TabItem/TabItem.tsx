import React from 'react';
import { Box } from '@material-ui/core';
import { useStyles } from './styles';

export interface TabItemProps {
  index: number;
  text: string;
  active?: boolean;
  style?: React.CSSProperties;
  fontStyle?: React.CSSProperties;
  onClick?: (i: number) => void;
}

const TabItem: React.FC<TabItemProps> = (props: TabItemProps) => {
  const { index, text, active = false, style, fontStyle, onClick } = props;
  const classes = useStyles();
  return (
    <>
      <Box
        className={classes.tabItem}
        style={style}
        onClick={() => active && onClick && onClick(index)}
      >
        <Box
          className={
            active ? classes.tabItemBoxActive : classes.tabItemBoxInactive
          }
        >
          <span style={fontStyle}>{text}</span>
        </Box>
      </Box>
    </>
  );
};

TabItem.defaultProps = {
  fontStyle: {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    flex: 1,
    display: 'flex',
  },
};

export { TabItem };
