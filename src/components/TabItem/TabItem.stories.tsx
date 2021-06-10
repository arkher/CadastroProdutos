import React from 'react';
import { storiesOf } from '@storybook/react';
import { TabItem } from './TabItem';

storiesOf('Tab', module)
  .add('200px inativo', () => (
    <TabItem index={0} text="Tab Item 1" style={{ width: '200px' }} />
  ))
  .add('200px ativo', () => (
    <TabItem index={0} text="Tab Item 2" active style={{ width: '200px' }} />
  ));
