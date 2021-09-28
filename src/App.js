import React from 'react';
import './App.css';
import FlyThemeProvider from './kit/components/FlyThemeProvider';
import Button from '@/components/data-entry/Button';

function App() {
  return (
    <div className="App">
      <FlyThemeProvider>
        <header className="App-header">
          <img src="logo" className="App-logo" alt="logo" />
          <p>JavaScript UI Kit</p>
          <a
            className="App-link"
            href="https://ijs.to/@scottagirs"
            target="_blank"
            rel="noopener noreferrer"
          >
            by @scottagirs
          </a>
        </header>

        <main>
          <Button>Haha</Button>
        </main>
      </FlyThemeProvider>
    </div>
  );
}

export default App;
