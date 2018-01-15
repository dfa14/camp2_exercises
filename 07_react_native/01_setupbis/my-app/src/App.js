import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {counter : 0};
  }

  decrease(){
    this.setState({counter : this.state.counter - 0.5});
  }

  increase(){
    this.setState({counter : this.state.counter + 1});
  }
&
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button className="but" onClick={this.decrease.bind(this)} > -1
        </button>

        <span> {this.state.counter} </span>
        <button className="but" onClick={this.increase.bind(this)} > +1
        </button>
          <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
