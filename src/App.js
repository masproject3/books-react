import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      const helloWord = 'Добро пожаловать в Путь к изучению React';
      let user = {
          name: 'Иван',
          lastName: 'Иванов',
      };
      return (
      <div className="App">
        <h2>{helloWord}</h2>
        <div className="user_name">{user.lastName +' '+ user.name}</div>
      </div>
    );
  }
}

export default App;
