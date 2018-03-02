import React, {Component} from 'react'
import Item from './item'

class Products extends Component{

    render(){
        const items = this.props.inventory.map((item, index)=>{
            return (<Item 
                key={item.id}
                name={item.name}
                price= {item.price}
                category={item.category}
                description = {item.description}
            />)
        })

        return(
        <div className="container">
            <div className="row">

                <div className="col s12 center-align">
                {items}
                </div>

            </div>
            </div>
        )
    }
}

export default Products