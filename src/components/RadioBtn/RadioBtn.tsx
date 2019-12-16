/** @jsx jsx */
import React, { useState, Fragment } from 'react';
import { jsx, css } from '@emotion/core';
import {
  FancyRadioBtnSpan,
  Item,
  RadioButtonLabel,
  RadioDot,
  FancyLabelText,
} from 'components/RadioButtonSample1/RadioButtonStyle';

type RadioButtonProps = {
  /** RadioButtonProps content */
};

/** The `Input` component is used to .....  */
const RadioBtn = () => {
  const [select, setSelect] = useState('anyPriceChange3');
  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelect(value);
  };

  const base = css`
    border: solid 2px '#888888';
    display: block;
    height: 20px;
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
  `;
  return (
    <Fragment>
      <Item>
        <input
          type="radio"
          id="radio9"
          name="radio-group"
          hidden
          value="anyPriceChange3"
          checked={select === 'anyPriceChange3'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel htmlFor={'radio9'}>
          <FancyLabelText>Crasornare tristique elit</FancyLabelText>
          <FancyRadioBtnSpan
            css={css`
              ${base};
            `}
          >
            <RadioDot />
          </FancyRadioBtnSpan>
        </RadioButtonLabel>
      </Item>
      <Item>
        <input
          type="radio"
          id="radio8"
          hidden
          name="radio-group"
          value="anyPriceChange2"
          checked={select === 'anyPriceChange2'}
          onChange={event => handleSelectChange(event)}
        />
        <RadioButtonLabel htmlFor={'radio8'}>
          <FancyLabelText className="fancy-label--text">
            Crasornare tristique elit
          </FancyLabelText>
          <FancyRadioBtnSpan
            css={css`
              ${base};
            `}
            className="fancy-radiobutton"
          >
            <RadioDot />
          </FancyRadioBtnSpan>
        </RadioButtonLabel>
      </Item>
    </Fragment>
  );
};

export default RadioBtn;
