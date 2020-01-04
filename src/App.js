import React, { Component } from 'react';
import Header from './components/layout/Header';

import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import Postform from './components/Postform';

import { applyMiddleware } from 'redux';

import store from  './store';

export class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <div className="App">
        <Header />
        <Postform /> <hr />
        <Posts />
      </div>
      </Provider>
    )
  }
}

export default App
