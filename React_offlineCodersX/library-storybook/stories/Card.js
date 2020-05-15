import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import BookItem from '../src/components/BookItem/BookItem';

storiesOf('Card', module)
  .add(
    'default',
    () => (
      <BookItem title="the godfather"
        desc='Mario Puzo'
        coverUrl="https://bookbuy.vn/Res/Images/Product/bo-gia-bia-cung-tai-ban-2017-_73982_1.jpg"
      />
    )
  );
