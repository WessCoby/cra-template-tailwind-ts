import React from 'react';

import logo from './logo.svg';


function App() {
  return (
    <div className="h-screen antialiased bg-primary-500">
      <header
        className="h-full w-full flex flex-col items-center justify-center text-white text-2xl"
      >
        <img src={logo} className="w-64 animate-spin-slow" alt="logo" />
        <p className="text-center">
          Edit <code className="font-mono">src/App.js</code> and save to reload.
        </p>
        <a
          className="text-secondary-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
