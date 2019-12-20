export const baseTheme = {
  space: [0, 2, 4, 8, 16, 32],
  fontSizes: [14, 16, 18, 24, 32],
  colors: {
    blue: '#07c',
    tomato: 'tomato',
    purple: 'purple',
    lightGreen: '#20c997',
    secondaryBtn: '#e9ecef',
    darkGrey: '#343a40',
  },
  radii: [0, 2, 4, 8],
};

const staticTheme = {
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: baseTheme.colors.lightGreen,
      svg: {
        fill: 'white',
      },
      '&:hover:enabled': {
        background: '#38d9a9',
      },
      '&:active:enabled': {
        background: '#12b886',
      },
      '&:disabled': {
        background: '#aed9cc',
      },
    },
    secondary: {
      color: baseTheme.colors.darkGrey,
      backgroundColor: baseTheme.colors.secondaryBtn,
      svg: {
        fill: baseTheme.colors.darkGrey,
      },
      '&:hover:enabled': {
        background: '#f1f3f5',
      },
      '&:active:enabled': {
        background: '#dee2e6',
      },
      '&:disabled': {
        background: '#c6d3e1',
        svg: {
          fill: '#c6d3e1',
        },
      },
    },
    tertiary: {
      color: baseTheme.colors.lightGreen,
      backgroundColor: 'none',
      svg: {
        fill: baseTheme.colors.lightGreen,
      },
      '&:hover:enabled': {
        background: '#e6fcf5',
      },
      '&:active:enabled': {
        background: '#c3fae8',
      },
      '&:disabled': {
        background: '#bcd9d0',
        svg: {
          fill: '#bcd9d0',
        },
      },
    },
    danger: {
      color: 'white',
      backgroundColor: baseTheme.colors.tomato,
    },
  },
  buttonSizes: {
    medium: {
      fontSize: baseTheme.fontSizes[2],
      padding: `8px 16px`,
      borderRadius: baseTheme.radii[2],
    },
    large: {
      fontSize: baseTheme.fontSizes[3],
      padding: `12px 24px`,
      borderRadius: baseTheme.radii[2],
    },
  },
  baseColors: {
    error: '#BF1650',
  },
  checkboxSize: 20,
  checkDash: 48,
  radioDotSize: 12,
  aniSpeedFast: 0.5,
  aniSpeedFaster: 0.3,
  aniSpeedFastest: 0.15,
};
const themeLight = {
  background: '#161617',
  body: '#fff',
  colors: {
    success: 'green',
    error: staticTheme.baseColors.error,
    white: '#fff',
    grey: '#ccc',
    active: '#FF8C00',
    black: '#161617',
    gray: '#F8F8F9',
    secondary: 'red',
    primary: 'blue',
  },
  fontColor: {
    primary: '#161617',
    active: '#FF8C00',
  },
};

const themeDark = {
  background: '#fff',
  body: '#161617',
  colors: {
    success: 'green',
    error: staticTheme.baseColors.error,
    white: '#fff',
    grey: '#ccc',
    active: '#FF8C00',
    black: '#161617',
    gray: '#F8F8F9',
    primary: 'red',
    secondary: 'blue',
  },
  fontColor: {
    primary: '#fafafa',
    active: '#FF8C00',
  },
};

const theme = (mode: string): object =>
  mode === 'dark'
    ? { ...staticTheme, ...themeDark }
    : { ...staticTheme, ...themeLight };
export default theme;
