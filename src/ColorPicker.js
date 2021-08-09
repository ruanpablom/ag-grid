import React from 'react';
import { ColorPicker, Span } from './styles';

const ActiveBox = ({value}) => {
  console.log(value);
  return <>
    <ColorPicker type="color" defaultValue={value[1]} />
    <Span>{value[0]}</Span>
  </>
}

export default ActiveBox;