/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { sizes, style, themes } from './ButtonStyle';

type ButtonProps = {
  /** Button content */
  children: React.ReactNode;
  /** the function when clicked */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button shape */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** Button size*/
  size: 'small' | 'medium' | 'big';
  /** disable Button */
  disabled?: boolean;
  /** Button width */
  width?: string | number;
};

/** The `Button` component is used to trigger any action.  */
function Button({ width, disabled, theme, size, children, onClick }: ButtonProps) {
  // const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button disabled={disabled} css={[style, themes[theme], sizes[size], { width }]} onClick={onClick}>
      {children}
    </button>
  );
}
Button.defaultProps = {
  theme: 'primary',
  size: 'big',
};

export default Button;
