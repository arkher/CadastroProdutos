import React from 'react';
import { Grid, RadioGroup as MUIRadioGroup } from '@material-ui/core';
import { RadioOption, RadioOptionProps } from '../RadioOption/RadioOption';
import { useClasses } from './styles';

export interface RadioGroupItem {
  value: string;
  label: string | React.ReactNode;
  gridSize?: 2 | 1 | 'auto' | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  options?: RadioOptionProps;
}

export interface RadioGroupProps {
  name: string;
  items: Array<RadioGroupItem>;
  selectedValue?: string;
  radioOptionStyle?: React.CSSProperties;
  key?: string;
  onChange?: (selectedValue: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  items,
  name,
  radioOptionStyle,
  selectedValue,
  key,
  onChange,
}: RadioGroupProps) => {
  const [_selectedValue, set_SelectedValue] = React.useState(selectedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    set_SelectedValue(value);
    if (onChange) onChange(value);
  };

  return (
    <MUIRadioGroup
      key={key}
      classes={useClasses().formLabel}
      aria-label={name}
      name={name}
      value={_selectedValue}
      onChange={handleChange}
    >
      <Grid container spacing={3} style={{ marginTop: 8 }}>
        {items.map((v, i) => (
          <Grid
            item
            xs={v.gridSize || 12}
            sm={v.gridSize || 6}
            md={v.gridSize || 6}
            lg={v.gridSize || 6}
            xl={v.gridSize || 6}
            style={{ paddingTop: '4px', paddingBottom: '4px' }}
          >
            <RadioOption
              key={`option_${i + 1}`}
              label={v.label}
              value={v.value}
              checked={_selectedValue === `${v.value}`}
              style={
                radioOptionStyle ?? {
                  width: '100%',
                }
              }
              {...v.options}
            />
          </Grid>
        ))}
      </Grid>
    </MUIRadioGroup>
  );
};

RadioGroup.defaultProps = {
  onChange: () => undefined,
};

export { RadioGroup };
