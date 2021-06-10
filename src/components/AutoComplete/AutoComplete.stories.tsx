import React from 'react';
import { storiesOf } from '@storybook/react';
import { AutoComplete } from './AutoComplete';

const options = ['opção 1', 'opção 2'];
storiesOf('AutoComplete', module).add('Normal', () => (
  <AutoComplete
    options={options}
    value="opção 1"
    getOptionSelected={(option, value) => option === value}
  />
));
storiesOf('AutoComplete', module).add('Opened', () => (
  <AutoComplete
    value="opção 1"
    options={options}
    getOptionSelected={(option, value) => option === value}
    open
  />
));

storiesOf('AutoComplete', module).add('Focused', () => (
  <AutoComplete
    value="opção 1"
    options={options}
    getOptionSelected={(option, value) => option === value}
    autoFocus
    open
  />
));
