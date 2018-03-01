import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import inventory, {categories} from './inventory';

import MyComponent from './my-component';
import Products from './products';
import Categories from './categories';

class App extends Component {
  constructor(props){
    super(props)  
    this.state = {
      display_products : categories,
    }

    this.handleFilter.bind(this)
  }


  handleFilter = (category) => {
        
    this.setState({display_products:category});
    
    console.log(category)
  }


  render() {

    return (
      <div className="App">
        <MyComponent title="Make School"/>
        <Categories 
          categories={categories} 
          handleFilter={this.handleFilter}
          />
        <Products inventory={inventory}/>

      </div>
    );
  };
};

export default App;
