import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// TODO: implement
// :: File -> Eff (read :: FS.Read) Array String
const todos = (file) => {
    return ["todo1", "todo2"];
};

class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
            <span>file: todo...</span> {/* TODO: get App.js' path */}
            <ul>
            {
                todos().map(x => <li>{x}</li>)
            }
            </ul>
        {/*
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
         */}
        </header>
      </div>
    );
  }
}

export default App;
