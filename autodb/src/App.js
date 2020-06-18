import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import DB from './container/dbGrid'

class App extends Component {
    render (){
      return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> AUTO DB</h1>
            <DB/>
        </header>
      </div>
      )
  }
}

export default App;
