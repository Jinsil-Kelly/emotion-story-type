import {
  space,
  color,
  layout,
  flexbox,
  border,
  fontSize,
  borderRadius,
  buttonStyle,
} from 'styled-system';
import styled from '@emotion/styled';
import { buttonSize } from '../../themes/buttonStyle';

const Element = styled('div')`
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
   ${borderRadius}
    ${buttonStyle}
    ${space}
    ${fontSize}
`;

export default Element;
