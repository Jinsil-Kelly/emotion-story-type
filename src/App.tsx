import React from 'react';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import Icon from 'components/Icon/Icon';
import theme from 'utils/theme';
import 'App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={css``} />
      <div className="App">
        <button>hello</button>
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
