import { variant, VariantArgs } from 'styled-system';
export const buttonSize = variant({
  prop: 'size',
  variants: {
    small: {
      fontSize: 1,
      px: 2,
      py: 0,
      borderRadius: 3,
      height: '2rem',
    },
    medium: {
      height: '2.5rem',
      fontSize: 2,
      px: 3,
      py: 0,
      borderRadius: 4,
    },
    large: {
      height: '3rem',
      fontSize: 3,
      px: 4,
      py: 0,
      borderRadius: 4,
    },
  },
} as VariantArgs);

const common = {
  borderRadius: 3,
  textTransform: 'uppercase',
};

export const buttonStyle = variant({
  prop: 'variant',
  variants: {
    primary: {
      color: 'white',
      bg: 'primary',
      svg: {
        fill: 'white',
      },
      '&:hover:enabled': {
        bg: 'light-primary',
      },
      '&:active:enabled': {
        bg: 'light-primary',
      },
      '&:disabled': {
        color: 'btn.disabledGrayFont',
        bg: 'btn.disableGray',
      },
    },
    secondary: {
      bg: 'lighter-gray',
      color: 'gray',
      svg: {
        fill: 'gray',
      },
      '&:hover:enabled': {
        bg: 'lightest-gray',
      },
      '&:active:enabled': {
        bg: 'light-gray',
      },
      '&:disabled': {
        color: 'btn.disabledGrayFont',
        bg: 'btn.disableGray',
        // color: '#c6d3e1',
        svg: {
          fill: '#c6d3e1',
        },
      },
    },
    tertiary: {
      background: 'none',
      color: 'primary',
      svg: {
        fill: 'primary',
      },
      '&:hover:enabled': {
        bg: 'lightest-primary',
      },
      '&:active:enabled': {
        bg: 'lighter-primary',
      },
      '&:disabled': {
        color: 'btn.disabledGrayFont',
        bg: 'btn.disableGray',
        // color: 'disableGray',
        svg: {
          fill: 'disableGray',
        },
      },
    },
  },
});

export default { buttonStyle, buttonSize };
