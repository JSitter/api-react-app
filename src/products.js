import React, {Component} from 'react'
import Product from './product'

class Products extends Component{

    render(){
        const products = this.props.inventory.map((product, index)=>{
            return (<Product
                key={product.id}
                name={product.name}
                price= {product.price}
                category={product.category}
                description = {product.description}
            />)
        })

        return(
        <div className="container">
            <div className="row center">

                <div className="col s12 center-align">
                {products}
                </div>

            </div>
            </div>
        )
    }
}

export default Products
