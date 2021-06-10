import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioGroupItem, RadioGroup } from './RadioGroup';

const values: Array<RadioGroupItem> = [
  {
    value: 'pablo',
    label: 'Pablo',
  },
  {
    value: 'wilson',
    label: 'Wilson',
  },
  {
    value: 'paulo',
    label: 'Paulo',
  },
];

storiesOf('RadioGroup', module)
  .add('Fluid', () => <RadioGroup items={values} name="nome" />)
  .add('Fixed', () => (
    <RadioGroup
      items={values}
      name="nome"
      radioOptionStyle={{ width: '200px' }}
    />
  ));
