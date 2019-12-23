/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from '@emotion/core';
import { gapStyle, rightAlignStyle } from './CheckBoxGroupStyle';
import { ErrorMessage } from '../shared/ErrorMessage';
import { useFormContext } from 'react-hook-form';

export type CheckBoxGroupProps = {
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
  groupName: string;
};

/**
 * Use the `CheckBoxGroup` component when you want to show multiple `Button` components, or if you want to align the buttons to the right.
 */
const CheckBoxGroup = ({
  groupName,
  direction,
  rightAlign,
  children,
  gap,
  className,
}: CheckBoxGroupProps) => {
  const { errors } = useFormContext();
  return (
    <Fragment>
      <div
        css={[
          {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: direction,
          },
          gapStyle(direction, gap),
          rightAlign && rightAlignStyle,
        ]}
        className={className}
      >
        {children}
      </div>
      {errors[groupName] && (
        <ErrorMessage>{errors[groupName]!.message}</ErrorMessage>
      )}
    </Fragment>
  );
};

CheckBoxGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem',
};

export default CheckBoxGroup;
