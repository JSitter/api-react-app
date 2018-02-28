import React, { Component } from 'react';
import Categories from './categories'

class Categories extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <Category name={this.props.name}/>
            </div>
        )
    }
}

export default Categories;