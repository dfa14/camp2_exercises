import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter : 0};
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={
          () =>  { this.setState({counter : this.state.counter - 1}); }
        }> -1
          </button>
          <span> {this.state.counter} </span>
          <button onClick={
            () =>  { this.setState({counter : this.state.counter + 1}); }
          }> +1
          </button>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
