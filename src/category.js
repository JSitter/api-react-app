import React, { Component } from 'react';

class Category extends Component{

    render(){
        return (
            <button onClick={()=> this.props.handleFilter(this.props.name) }>{this.props.name}
            </button>
        )
    }
}

export default Category;