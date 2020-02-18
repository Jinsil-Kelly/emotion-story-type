//https://johno.com/styled-system-button
//https://codesandbox.io/s/wql9613x4w
//https://codesandbox.io/s/k91mwyo1z7?from-embed
import styled from '@emotion/styled';
import {
  borderRadius,
  space,
  fontSize,
  variant,
  SpaceProps,
  BorderRadiusProps,
  FontSizeProps,
  ButtonStyleProps,
} from 'styled-system';
import React from 'react';
import Element from 'utils/Element';
import { buttonStyle, buttonSize } from '../../themes/buttonStyle';

const ButtonElem = styled(Element)`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2.5rem;
  // font-size: 0.875rem;
  // padding: 0 1rem;
  // border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  }
  &:disabled {
    cursor: not-allowed;
  }
  svg {
    width: 1em;
    margin-right: 1em;
  }
  ${buttonSize}
  ${buttonStyle}
`;
const NewButton = ({ variant, type, size, appearance, ...rest }: any) => {
  return (
    <ButtonElem
      variant={variant}
      size={size}
      appearance={appearance}
      as="button"
      {...rest}
    />
  );
};

NewButton.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: () => console.log('clicked'),
};

export default NewButton;
