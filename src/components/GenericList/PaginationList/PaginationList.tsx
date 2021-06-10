import React, { ChangeEvent } from 'react';
import { Box, Divider } from '@material-ui/core';
import { Pagination } from '@components/Pagination/Pagination';

export interface IPaginationProperties {
  page: number;
  numberOfPages: number;
  handleChange: (event: ChangeEvent<unknown>, page: number) => void;
}

const PaginationList: React.FC<IPaginationProperties> = (
  props: IPaginationProperties,
) => {
  const { handleChange, page, numberOfPages } = props;

  return (
    <>
      <Divider
        style={{
          height: '1px',
          marginTop: '15px',
          marginBottom: '15px',
        }}
      />
      <Pagination count={numberOfPages} page={page} onChange={handleChange} />
    </>
  );
};

export { PaginationList };
