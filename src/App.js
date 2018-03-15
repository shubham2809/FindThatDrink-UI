import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Layout from './layout/layout';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Layout/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
