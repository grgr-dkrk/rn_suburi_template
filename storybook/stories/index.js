import React from 'react';
import { storiesOf } from '@storybook/react-native';
import ButtonComponent from '../../src/components/Button';

storiesOf('Button', module).add('base', () => (
  <ButtonComponent handlePress={() => {}}>Press</ButtonComponent>
));
