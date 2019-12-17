import React from 'react';
import { Global } from '@emotion/core';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Icon from 'components/Icon/Icon';
import Input from './components/Input/Input';
import RadioButton from './components/RadioButton/RadioButton';
import CheckBox from './components/CheckBox/CheckBox';
import { Container } from './components/shared/PageLayout';
import { useThemeMode } from 'hooks/useThemeMode';
import getTheme from './utils/theme';
import { ThemeProvider, withTheme } from 'emotion-theming';
import { makeGlobalStyles } from './utils/globelStyles';

const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));

const App = () => {
  const [theme, toggleTheme, componentMounted] = useThemeMode();
  const themeMode = theme === 'light' ? getTheme('light') : getTheme('dark');

  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <Input register={() => console.log('register')} name={'sampleInput'} />
        <Button onClick={() => toggleTheme()}>
          {theme === 'light' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
        <RadioButton content="RadioBtn" />
        <CheckBox content="CheckBox" />
        <ButtonGroup>
          <Button>Button</Button>
          <Button>Button</Button>
          <Icon icon={'heart'} color={'darkOrange'} />
        </ButtonGroup>
      </Container>
    </ThemeProvider>
  );
};

export default App;
