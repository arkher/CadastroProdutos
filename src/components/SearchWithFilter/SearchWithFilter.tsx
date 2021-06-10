import React, { useState } from 'react';
import {
  Box,
  FormControl,
  Icon,
  IconButton,
  MenuItem,
  OutlinedInput,
  Select,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import { DropdownMenuOption } from '../DropdownMenu/DropdownMenu';
import { useStyles } from './styles';

interface Props {
  options: DropdownMenuOption[];
  value: string | undefined;
  filter: string;
  onSearch(): void;
  onChangeText(event: React.ChangeEvent<{ value: unknown }>): void;
  onChangeFilter(event: React.ChangeEvent<{ value: unknown }>): void;
  baseFilter?: string;
  onCleanFilter?: () => void;
}
function SearchWithFilter(props: Props): React.ReactElement {
  const {
    options,
    onSearch,
    onChangeText,
    onChangeFilter,
    value,
    filter,
    baseFilter,
    onCleanFilter,
  } = props;

  const classes = useStyles();
  const [showCleanButton, setShowButton] = useState(false);

  const renderOptionsIcon = <TuneRoundedIcon className={classes.filterIcon} />;
  const endAdornment = (
    <IconButton
      type="submit"
      onClick={() => {
        setShowButton(true);
        onSearch();
      }}
      disabled={filter === baseFilter}
    >
      <SearchIcon />
    </IconButton>
  );

  const keyPress = (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => {
    if (e.keyCode === 13) {
      setShowButton(true);
      onSearch();
    }
  };

  return (
    <Box style={{ display: 'flex', alignSelf: 'center' }}>
      {baseFilter !== filter && showCleanButton && (
        <IconButton
          onClick={() => {
            setShowButton(false);
            onCleanFilter?.();
          }}
        >
          <Icon>close</Icon>
        </IconButton>
      )}
      <FormControl variant="outlined" className={classes.selectRoot}>
        <Select
          value={filter}
          onChange={onChangeFilter}
          startAdornment={renderOptionsIcon}
        >
          {options.map(item => (
            <MenuItem value={item.title}>
              <Box className={classes.optionBox}>{item.title}</Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.inputBusca} variant="outlined">
        <OutlinedInput
          id="outlined-adornment-"
          value={value}
          disabled={filter === baseFilter}
          onChange={onChangeText}
          endAdornment={endAdornment}
          className={classes.outlinedInput}
          placeholder="Buscar"
          onKeyDown={keyPress}
        />
      </FormControl>
    </Box>
  );
}

SearchWithFilter.defaultProps = {
  baseFilter: 'Selecione um filtro',
  onCleanFilter: () => undefined,
};

export { SearchWithFilter };
