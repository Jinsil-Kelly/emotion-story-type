/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { sizes, style, themes } from './ButtonStyle';

type ButtonProps = {
  /** the content of Button */
  children: React.ReactNode;
  /** the function when clicked */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** the shape of Button */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** the size of Button*/
  size: 'small' | 'medium' | 'big';
  /** disable Button */
  disabled?: boolean;
  /** set the width of Button */
  width?: string | number;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다.  */
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
