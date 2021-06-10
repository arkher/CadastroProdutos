import React from 'react';
import { storiesOf } from '@storybook/react';
import { RoundedButton } from './RoundedButton';

storiesOf('RoundedButton', module)
  .add('Normal', () => <RoundedButton>Normal</RoundedButton>)
  .add('Disabled', () => <RoundedButton disabled>Desabilitado</RoundedButton>);
