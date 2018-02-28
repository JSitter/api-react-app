import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import inventory, {categories} from './inventory';

import MyComponent from './my-component';
import Products from './products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent title="Make School"/>
        
        <Products inventory={inventory}/>
      </div>
    );
  }
}

export default App;
