import React from 'react';
import { Box } from '@material-ui/core';
import MUIDataTable, {
  MUIDataTableColumn,
  MUIDataTableOptions,
} from 'mui-datatables';
import ReactPlaceholder from 'react-placeholder/lib';
import { Pagination } from '../Pagination/Pagination';
import DataTablePlaceholder from './DataTablePlaceholder';
import { useStyles } from './styles';

export type DataTableProps<T> = {
  title?: string;
  data: Array<T>;
  onItemPress: (item: T) => void;
  numberOfPages: number;
  columns: MUIDataTableColumn[];
  options?: MUIDataTableOptions;
  page: number;
  onChangePage: (event: React.ChangeEvent<unknown>, page: number) => void;
  containerStyle?: React.CSSProperties;
  loading?: boolean;
};
function DataTable<T>(props: DataTableProps<T>): React.ReactElement {
  const {
    title,
    data,
    columns,
    options,
    containerStyle,
    loading,
    onItemPress,
    onChangePage,
    numberOfPages,
    page,
  } = props;

  const classes = useStyles();

  const defaultOptions: MUIDataTableOptions = {
    responsive: 'simple',
    fixedHeader: true,
    tableBodyHeight: '70vh',
    textLabels: {
      body: {
        noMatch: 'Nenhum resultado encontrado',
      },
    },
    selectableRows: 'none',
    customFooter: () => (
      <Pagination count={numberOfPages} page={page} onChange={onChangePage} />
    ),
    onRowClick: (rowData: unknown) => {
      onItemPress((rowData as unknown) as T);
    },
    filter: false,
    viewColumns: false,
    print: false,
    download: false,
    search: false,
    setTableProps: () => ({ className: classes.root }),
  };

  return (
    <Box
      style={{
        width: '100%',
        ...containerStyle,
      }}
    >
      <ReactPlaceholder
        customPlaceholder={<DataTablePlaceholder />}
        ready={!loading}
      >
        <MUIDataTable
          title={title}
          data={data as Object[]}
          columns={columns}
          options={{
            ...defaultOptions,
            ...options,
          }}
        />
      </ReactPlaceholder>
    </Box>
  );
}

DataTable.defaultProps = {
  containerStyle: {},
  loading: undefined,
  options: undefined,
};

export default DataTable;
