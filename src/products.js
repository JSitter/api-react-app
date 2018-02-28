import React, {Component} from 'react'
import Item from './item'

class Products extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const items = this.props.inventory.map((item, index)=>{
            return (<Item 
                key={item.id}
                name={item.name}
                price= {item.price}
                category={item.category}
            />)
        })

        return(
            <div>
                {items}
            </div>
        )
    }
}

export default Products