import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextField } from './TextField';

storiesOf('TextField', module).add('Normal', () => <TextField name="txt1" />);
storiesOf('TextField', module).add('Focused', () => <TextField autoFocus />);
