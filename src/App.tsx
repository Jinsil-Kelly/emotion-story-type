import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';
import ButtonGroup from './components/ButtonGroup/ButtonGroup';
import Icon from './components/Icon/Icon';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <ButtonGroup>
          <Button>btn1</Button>
          <Button>btn2</Button>
        </ButtonGroup>
        <Button>hell</Button>
        <Icon icon={'heart'} />
      </body>
    </div>
  );
};

export default App;
