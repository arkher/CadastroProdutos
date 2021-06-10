import React from 'react';
import { ListItem as MuiListItem } from '@material-ui/core';
import { useClasses } from './styles';

export interface ListItemProps {
  onClick?(): void;
  conteudo: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = (props: ListItemProps) => {
  const { conteudo, onClick } = props;
  const classes = useClasses();

  return (
    <MuiListItem onClick={onClick} button classes={classes.listItem}>
      {conteudo}
    </MuiListItem>
  );
};

export { ListItem };
