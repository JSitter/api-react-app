import React, { Component } from 'react';

class Category extends Component{

    render(){
        return (
            <a className="waves-effect waves-light btn" onClick={()=> this.props.handleFilter(this.props.name) }>{this.props.name}
            </a>
        )
    }
}

export default Category;