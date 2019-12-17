/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';
import { RadioButtonStyle } from './RadioButtonStyle';
type RadioButtonProps = {
  register: () => void;
  /** Content next to RadioButton */
  content: string;
};
/** The `RadioButton` component is used to v....  */
const RadioButton = ({ register, content }: RadioButtonProps) => {
  const [select, setSelect] = useState('anyPriceChange3');
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelect(value);
  };
  return (
    <div>
      <RadioButtonStyle>
        <label className="radioButtonLabel">
          <input
            className="radioButtonInput"
            type="radio"
            ref={register}
            value="anyPriceChange3"
            checked={select === 'anyPriceChange3'}
            onChange={event => handleSelectChange(event)}
            name="radio"
          />
          <span className="radioButtonCustom" />
          <span className="radioButtonContent">{content}</span>
        </label>
      </RadioButtonStyle>
      <RadioButtonStyle>
        <label className="radioButtonLabel">
          <input
            className="radioButtonInput"
            type="radio"
            ref={register}
            value="anyPriceChange2"
            checked={select === 'anyPriceChange2'}
            onChange={event => handleSelectChange(event)}
            name="radio1"
          />
          <span className="radioButtonCustom" />
          <span className="radioButtonContent">{content}</span>
        </label>
      </RadioButtonStyle>
    </div>
  );
};
RadioButton.defaultProps = {
  register: () => console.log('register'),
  content: '',
};

export default RadioButton;
