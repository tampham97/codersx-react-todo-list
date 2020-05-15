import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Pagination from '../src/components/Pagination/Pagination';

storiesOf('Pagination', module)
  .add(
    'default',
    () => (
      <Pagination pageSize={4}/>
    )
  );
