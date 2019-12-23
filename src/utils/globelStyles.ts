import { ThemeProps } from './types';
import { css } from '@emotion/core';

export const makeGlobalStyles = (theme: ThemeProps) => css`
  body {
    background-color: ${theme.body};
    // transition: all 0.25s linear;
  }
`;
