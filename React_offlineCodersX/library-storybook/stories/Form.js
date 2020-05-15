import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FormSearch from '../src/components/Form/FormSearch';

storiesOf('Form', module)
  .add(
    'search',
    () => (
      <FormSearch >Search</FormSearch>
    )
  );
