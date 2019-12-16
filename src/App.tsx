import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Icon from 'components/Icon/Icon';
import theme from 'utils/theme';
import Input from './components/Input/Input';
import RadioButton from './components/RadioButton/RadioButton';
import CheckBox from './components/CheckBox/CheckBox';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          .App {
            text-align: left;
          }
        `}
      />
      <div className="App">
        <RadioButton content="안녕안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요하세요" />
        <div>
          <CheckBox content="안녕안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요하세요" />
          <CheckBox content="hoho" />
        </div>

        <Input
          name={'Iam input'}
          initialValue="asdf"
          register={() => {
            console.log('register');
          }}
        />
        <div>
          <ButtonGroup>
            <Button>btn1</Button>
            <Button>btn2</Button>
          </ButtonGroup>
          <Button>hell</Button>
          <Icon icon={'heart'} color={'red'} width={'50px'} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
