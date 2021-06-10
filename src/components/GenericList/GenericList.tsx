import React from 'react';
import { Box, List as MuiListGeneric } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import ReactPlaceholder from 'react-placeholder/lib';
import PlaceholderList from '../PlaceholderList/PlaceHolderList';
import { useStyles } from './styles';

export interface IListProperties<T> {
  headerComponent?: React.ReactElement;
  data: T[];
  renderItem?: (item: T) => JSX.Element;
  placeHolderComponent?: React.ReactElement;
  emptyListComponent?: React.ReactElement;
  contentContainerStyle?: CSSProperties;
  footerComponent?: React.ReactElement;
  footerStyle?: CSSProperties;
  loading: boolean;
  paginationComponent?: React.ReactElement;
  paginationStyle?: CSSProperties;
}

const GenericList = <T extends object>(
  props: IListProperties<T>,
): JSX.Element => {
  const {
    headerComponent: headerList,
    data: listItems,
    renderItem,
    placeHolderComponent: placeHolder,
    emptyListComponent: emptyList,
    contentContainerStyle,
    footerComponent: footerList,
    footerStyle,
    paginationComponent: pagination,
    paginationStyle,
    loading,
  } = props;

  const classes = useStyles();

  return (
    <MuiListGeneric>
      <Box>
        {headerList}
        <Box
          style={{
            ...contentContainerStyle,
          }}
          className={classes.boxRoot}
        >
          <ReactPlaceholder
            customPlaceholder={placeHolder || <PlaceholderList />}
            ready={!loading}
          >
            {listItems.length > 0
              ? listItems.map(item => <Box>{renderItem?.(item)}</Box>)
              : { emptyList }}
          </ReactPlaceholder>
        </Box>
        <Box style={{ ...footerStyle }}>{footerList}</Box>
        <Box style={{ ...paginationStyle }}>{pagination}</Box>
      </Box>
    </MuiListGeneric>
  );
};

export { GenericList };
