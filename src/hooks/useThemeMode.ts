//https://css-tricks.com/a-dark-mode-toggle-with-react-and-themeprovider/
import { useEffect, useState } from 'react';
type themeModeProps<T, K, S> = [T, K, S];
export const useThemeMode = (): themeModeProps<string, () => void, boolean> => {
  const [theme, setTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const toggleTheme = () => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');

    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode('dark')
      : localTheme
      ? setTheme(localTheme)
      : setMode('light');

    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
