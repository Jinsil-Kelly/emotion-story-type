/** @jsx jsx */
import React, { useState, Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled/macro';

//https://codesandbox.io/s/ymwo5419yv

const Item = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  position: relative;
`;
const RadioButtonLabel = styled('label')`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`;
const RadioButton2 = styled('input')`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #bebebe;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      background: #eeeeee;
    }
  }
  &:checked + ${RadioButtonLabel} {
    background: #db7290;
    border: 1px solid #db7290;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 12px;
      height: 12px;
      margin: 6px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.1);
      background: white;
    }
  }
`;
/** The `Input` component is used to .....  */
const RadioButton = () => {
  const [select, setSelect] = useState('anyPriceChange3');
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelect(value);
  };

  return (
    <Fragment>
      <Item>
        <RadioButton2
          type="radio"
          name="radio"
          value="anyPriceChange3"
          checked={select === 'anyPriceChange3'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Auto accept any price change</div>
      </Item>
      <Item>
        <RadioButton2
          type="radio"
          name="radio"
          value="anyPriceChange"
          checked={select === 'anyPriceChange'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Auto accept any price change</div>
      </Item>
      <Item>
        <RadioButton2
          type="radio"
          name="radio"
          value="anyPriceChange2"
          checked={select === 'anyPriceChange2'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel />
        <div>Auto accept222 any price change</div>
      </Item>
    </Fragment>
  );
};

export default RadioButton;
