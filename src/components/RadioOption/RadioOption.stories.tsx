import React from 'react';
import { storiesOf } from '@storybook/react';
import { RadioOption } from './RadioOption';

storiesOf('RadioOption', module)
  .add('Normal', () => (
    <RadioOption label="normal" value="1" style={{ width: '300px' }} />
  ))
  .add('Disabled', () => (
    <RadioOption
      label="disabled"
      value="2"
      disabled
      style={{ width: '300px' }}
    />
  ))
  .add('Selected', () => (
    <RadioOption
      label="selected"
      value="3"
      checked
      style={{ width: '300px' }}
    />
  ));
