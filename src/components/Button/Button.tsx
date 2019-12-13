/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { iconOnlySizes, iconOnlyStyle, sizes, style, themes } from './ButtonStyle';

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
  /** Set this to `true` when showing only icons on buttons. */
  iconOnly?: boolean;
};

/** The `Button` component is used to trigger any action.  */
function Button({
  iconOnly,
  width,
  disabled,
  theme,
  size,
  children,
  onClick,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

export default Button;
