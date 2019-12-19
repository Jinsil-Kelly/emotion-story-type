//https://johno.com/styled-system-button
//https://codesandbox.io/s/wql9613x4w
//https://codesandbox.io/s/k91mwyo1z7?from-embed
import styled from '@emotion/styled';
import {
  borderRadius,
  buttonStyle,
  space,
  fontSize,
  variant,
  SpaceProps,
  BorderRadiusProps,
  FontSizeProps,
  ButtonStyleProps,
} from 'styled-system';

const buttonSize = variant({
  scale: 'buttonSizes',
  prop: 'size',
});

type NewButtonProps =
  | { size: string }
  | FontSizeProps
  | SpaceProps
  | BorderRadiusProps
  | ButtonStyleProps;

const NewButton = styled.div<NewButtonProps>`
    appearance: "button";
    border: 0;
    outline: 0;
    ${borderRadius}
    ${buttonStyle}
    ${space}
    ${fontSize}
    ${buttonSize}
    `;

NewButton.defaultProps = {
  variant: 'primary',
  size: 'medium',
};

export default NewButton;
