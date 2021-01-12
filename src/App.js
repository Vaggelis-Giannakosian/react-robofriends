import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Hello from './Hello'
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {name: 'Vangelis'};
    }

  render (){

    return  (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
              <Hello greeting={this.state.name} />
            <a
                className="App-link"
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
}

export default App;
