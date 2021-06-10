import React, { ChangeEvent, ReactElement, ReactNode } from 'react';
import {
  FilledInputProps,
  InputProps,
  OutlinedInputProps,
  TextFieldProps,
} from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import {
  Autocomplete as MuiAutocomplete,
  AutocompleteRenderOptionState,
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
  AutocompleteInputChangeReason,
  FilterOptionsState,
  AutocompleteCloseReason,
} from '@material-ui/lab';
import { TextField } from '../TextField/TextField';
import { useClasses } from './styles';

interface AutoCompleteProps<OptionType> {
  clearOnBlur?: boolean | undefined;
  autoFocus?: boolean;
  style?: React.CSSProperties;
  noOptionsText?: string;
  options: Array<OptionType>;
  getOptionSelected: (option: OptionType, value: OptionType) => boolean;
  open?: boolean | undefined;
  freeSolo?: boolean | undefined;
  loading?: boolean | undefined;
  disableClearable?: boolean | undefined;
  value: OptionType | undefined;
  getOptionLabel?: (option: OptionType) => string;
  renderOption?: (
    option: OptionType,
    state: AutocompleteRenderOptionState,
  ) => ReactNode | undefined;
  onChange?: (
    event: ChangeEvent<{}>,
    value: string | OptionType | NonNullable<OptionType> | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<OptionType> | undefined,
  ) => void;
  onInputChange?: (
    event: React.ChangeEvent<{}>,
    value: string,
    reason: AutocompleteInputChangeReason,
  ) => void;
  filterOptions?: (
    options: OptionType[],
    state: FilterOptionsState<OptionType>,
  ) => OptionType[];
  textFieldInputProps?:
    | Partial<InputProps>
    | Partial<FilledInputProps>
    | Partial<OutlinedInputProps>
    | undefined;
  popupIcon?: ReactNode;
  onKeyDown?: (event: React.KeyboardEvent<{}>) => void;
  onClose?: (
    event: React.ChangeEvent<{}>,
    reason: AutocompleteCloseReason,
  ) => void;
  placeholder?: string;
}

function AutoComplete<OptionType>(
  props: AutoCompleteProps<OptionType>,
): ReactElement {
  const { textFieldInputProps } = props;
  const classes = useClasses();
  return (
    <MuiAutocomplete
      {...props}
      loadingText="Carregando..."
      classes={classes.select}
      renderInput={(params: TextFieldProps) => {
        return (
          <TextField
            {...params}
            value={props.value}
            placeholder={props.placeholder}
            autoFocus={props.autoFocus}
            InputProps={{
              ...params.InputProps,
              ...textFieldInputProps,
              endAdornment: (
                <>
                  {textFieldInputProps?.endAdornment ||
                    params?.InputProps?.endAdornment}
                </>
              ),
            }}
          />
        );
      }}
    />
  );
}

AutoComplete.defaultProps = {
  style: { width: '100%' },
  noOptionsText: 'Não encontrado',
  autoFocus: false,
  open: undefined,
  freeSolo: undefined,
  loading: undefined,
  renderOption: undefined,
  getOptionLabel: (x: unknown) => x,
  onChange: undefined,
  disableClearable: undefined,
  onInputChange: undefined,
  filterOptions: undefined,
  textFieldInputProps: undefined,
  popupIcon: <ArrowDropDown />,
  onKeyDown: undefined,
  clearOnBlur: false,
  onClose: undefined,
  placeholder: undefined,
};

export { AutoComplete };
