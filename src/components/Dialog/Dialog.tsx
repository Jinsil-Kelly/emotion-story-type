/** @jsx jsx */
import React, { Fragment } from 'react';
import { jsx } from '@emotion/core';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import { darkLayer, fullscreen, whiteBox, whiteBoxWrapper } from './DialogStyle';
import { useTransition, animated } from 'react-spring';

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
  const fadeTransition = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const slideUpTransition = useTransition(visible, null, {
    from: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    enter: {
      transform: `translateY(0px) scale(1)`,
      opacity: 1,
    },
    leave: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
  });
  return (
    <Fragment>
      {fadeTransition.map(({ item, key, props }) =>
        item ? (
          <animated.div css={[fullscreen, darkLayer]} key={key} style={props} />
        ) : null,
      )}

      {slideUpTransition.map(({ item, key, props }) =>
        item ? (
          <animated.div css={[fullscreen, whiteBoxWrapper]} style={props} key={key}>
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
          </animated.div>
        ) : null,
      )}
    </Fragment>
  );
}
Dialog.defaultProps = {
  cancelText: 'No',
  confirmText: 'Yes',
};
export default Dialog;
