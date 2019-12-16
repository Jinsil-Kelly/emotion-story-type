import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Icon from 'components/Icon/Icon';
import theme from 'utils/theme';
import Input from './components/Input/Input';
import RadioButton from './components/RadioButton/RadioButton';
import CheckBox from './components/CheckBox/CheckBox';
import { Container } from './components/shared/PageLayout';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={''} />
      <Container>
        <Input register={() => console.log('register)')} name={'sampleInput'} />
        <Button>Button</Button>
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
