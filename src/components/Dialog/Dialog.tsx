/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from '@emotion/core';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import { darkLayer, fullscreen, whiteBox, whiteBoxWrapper } from './DialogStyle';

export type DialogProps = {
  visible: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

function Dialog({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  children,
  onCancel,
  onConfirm,
}: DialogProps) {
  if (!visible) return null;

  return (
    <Fragment>
      <div css={[fullscreen, darkLayer]} />
      <div css={[fullscreen, whiteBoxWrapper]}>
        <div css={whiteBox}>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {children}
          {!hideButtons && (
            <ButtonGroup css={{ marginTop: '3rem' }} rightAlign>
              {cancellable && (
                <Button theme="tertiary" onClick={onCancel}>
                  {cancelText}
                </Button>
              )}
              <Button onClick={onConfirm}>{confirmText}</Button>
            </ButtonGroup>
          )}
        </div>
      </div>
    </Fragment>
  );
}
Dialog.defaultProps = {
  cancelText: 'No',
  confirmText: 'Yes',
};
export default Dialog;
