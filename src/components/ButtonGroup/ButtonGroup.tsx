/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { gapStyle, rightAlignStyle } from './ButtonGroupStyle';

export type ButtonGroupProps = {
  /** Direction to show the button */
  direction: 'row' | 'column';
  /** Show the button on the right. */
  rightAlign?: boolean;
  /** Set the distance between buttons. */
  gap: number | string;
  /** Buttons to show in the button group */
  children: React.ReactNode;
  /** Use when you want to customize style */
  className?: string;
};

/**
 * Use the `ButtonGroup` component when you want to show multiple `Button` components, or if you want to align the buttons to the right.
 */
function ButtonGroup({
  direction,
  rightAlign,
  children,
  gap,
  className,
}: ButtonGroupProps) {
  return (
    <div
      css={[
        {
          display: 'flex',
          flexDirection: direction,
        },
        gapStyle(direction, gap),
        rightAlign && rightAlignStyle,
      ]}
      className={className}
    >
      {children}
    </div>
  );
}

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem',
};

export default ButtonGroup;
