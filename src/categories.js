import React, { Component } from 'react';
import Category from './category';

class Categories extends Component {

    render(){
        const category = this.props.categories.map((item, index)=>{

            return (
                
                <Category
                    key = {index}
                    name = {item}
                    handleFilter = {this.props.handleFilter}
                />
            )
        })
        return (
            <div>
                {category}
            </div>
        )
    }
}

export default Categories;