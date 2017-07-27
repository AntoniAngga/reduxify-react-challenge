import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home.js';
import DetailStarwars from './DetailStarwars.js';
import { Provider } from 'react-redux';
import store from '../stores';


class App extends Component {
  constructor () {
    super();
    this.state = {
      data_api: '',
    }
  }
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div className="App">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to Starwars API</h2>
              </div>
              <Route exact path='/' component={Home}/>
              <Route path='/:id' component={DetailStarwars}/>
          </div>
          </div>
        </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
