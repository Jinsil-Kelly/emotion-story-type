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
import SelectBox from 'components/SelectBox/SelectBox';
import Form from 'components/Form/Form';

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
        <Form defaultValues={{ sex: 'female' }}>
          <Input name="firstName" label="First Name" />
          <Input name="lastName" label="Last Name" />
          <RadioButton content="RadioBtn" name="sex" value="female" />
          <RadioButton content="RadioBtn" name="sex" value="male" />
          <CheckBox content="CheckBox" name="checkbox" />
          <SelectBox
            label="Select Label"
            placeholder="When options Empty"
            name="SelectName"
            options={[]}
          />
          <SelectBox
            label="Select Label"
            placeholder="Ho Ho Ho"
            name="SelectTest"
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
          />
          <Button type={'submit'}>Submit</Button>
        </Form>
        <Button onClick={() => toggleTheme()}>
          {theme === 'light' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
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
