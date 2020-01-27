import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./my_comps/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Coming Soon
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to Chibuisi.com
        </a>
      </header>
      <Footer/>
    </div>
  );
}

export default App;
