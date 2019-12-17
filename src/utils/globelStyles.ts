import { ThemeProps } from './types';
import { css } from '@emotion/core';

export const makeGlobalStyles = (theme: ThemeProps) => css`
  body {
    background-color: ${theme.background};
    transition: all 0.25s linear;
  }
`;
