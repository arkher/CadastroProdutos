import React, { ChangeEvent } from 'react';
import { Box } from '@material-ui/core';
import { Pagination as MuiPagination } from '@material-ui/lab';
import { useStyles } from './styles';

export interface PaginationProps {
  count: number;
  page: number;
  onChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const classes = useStyles();
  const { count, page, onChange } = props;

  return (
    <Box component="span">
      <MuiPagination
        count={count}
        page={page}
        onChange={onChange}
        classes={{ ul: classes.paginator }}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};

export { Pagination };
