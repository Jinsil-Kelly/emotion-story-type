const staticTheme = {
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
