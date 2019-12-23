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
import React from 'react';

const buttonSize = variant({
  scale: 'buttonSizes',
  prop: 'size',
});

type NewButtonProps =
  | {
      iconOnly?: boolean;
      width?: string | number;
      type?: 'button' | 'reset' | 'submit' | undefined;
      size: 'small' | 'medium' | 'large';
      disabled?: boolean;
      onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    }
  | FontSizeProps
  | SpaceProps
  | BorderRadiusProps
  | ButtonStyleProps;

const NewButton = styled.button<NewButtonProps>`
    ${borderRadius}
    ${buttonStyle}
    ${space}
    ${fontSize}
    ${buttonSize}
  outline: none;
  border: none;
  // box-sizing: border-box;
  // height: 2rem;
  // font-size: 0.875rem;
  // padding: 0 1rem;
  // border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
    // appearance: button;
    // border: 0;
    // outline: 0;
   
     &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:disabled {
    cursor: not-allowed;
  }
  svg {
    width: 1em;
    margin-right: 1em;
  }
    `;
// type ButtonProps = {
//   /** Button content */
//   children: React.ReactNode;
//   /** the function when clicked */
//   onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
//   /** Button shape */
//   variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
//   /** Button size*/
//   size: 'small' | 'medium' | 'large';
//   /** disable Button */
//   disabled?: boolean;
//   /** Button width */
//   width?: string | number;
//   /** Set this to `true` when showing only icons on buttons. */
//   iconOnly?: boolean;
//   type?: 'button' | 'reset' | 'submit' | undefined;
//   mt?: number;
// };
// const NewButton = ({
//   mt,
//   type,
//   iconOnly,
//   width,
//   disabled,
//   variant,
//   size,
//   children,
//   onClick,
// }: ButtonProps) => {
//   return (
//     <BtnWrap
//       onClick={onClick}
//       size={size}
//       disabled={disabled}
//       variant={variant}
//       mt={mt}
//     >
//       {children}
//     </BtnWrap>
//   );
// };

NewButton.defaultProps = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  onClick: () => console.log('clicked'),
};

export default NewButton;
