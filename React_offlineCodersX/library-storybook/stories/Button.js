import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../src/components/Button/Button';
import ButtonSuccess from '../src/components/Button/ButtonSuccess';
import BtnNext from '../src/components/Button/BtnNext';
import BtnPrev from '../src/components/Button/BtnPrev';
import BtnPagi from '../src/components/Button/BtnPagi';

storiesOf('Button', module)
  .add(
    'default',
    () => (
      <Button >View</Button>
    )
  ).add(
    'btn-success',
    ()=>(
      <ButtonSuccess>Search</ButtonSuccess>
    )
  ).add(
    'btn-next',
    ()=>(
      <BtnNext/>
    )
  ).add(
    'btn-prev',
    ()=>(
      <BtnPrev />
    )
  ).add(
    'btn-pagi',
    ()=>(
      <BtnPagi number={1}/>
    )
  );
