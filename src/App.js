import React, { Component } from 'react';

import './App.css';
import Main from './component/main';
import Header from './component/header';
import Form from './component/form'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      <Form/>
        <Main/>
        
      </div>
    );
  }
}

export default App;
