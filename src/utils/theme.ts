const staticTheme = {
  colors: {
    success: 'green',
    error: '#BF1650',
    white: '#fff',
    grey: '#ccc',
    active: '#FF8C00',
    black: '#161617',
    gray: '#F8F8F9',
  },
  checkboxSize: 20,
  checkDash: 48,
  radioDotSize: 12,
  aniSpeedFast: 0.5,
  aniSpeedFaster: 0.3,
  aniSpeedFastest: 0.15,
};
const themeLight = {
  background: staticTheme.colors.active,
  body: staticTheme.colors.white,
};

const themeDark = {
  background: staticTheme.colors.white,
  body: staticTheme.colors.success,
};

const theme = (mode: string): object =>
  mode === 'dark'
    ? { ...staticTheme, ...themeDark }
    : { ...staticTheme, ...themeLight };
export default theme;
