import React, { Component } from 'react';
import Category from './category'

class Category extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <button>{this.props.name}</button>
        )
    }
}

export default Category;