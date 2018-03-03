import React, {Component} from 'react'

class Product extends Component{

    render(){
        return(

                <div className="card blue-grey darken-1 hoverable col s6 m3 center-align">
                    <div className="card-content white-text">
                        <span class="card-title">{this.props.name}</span>
                        <p>
                        {this.props.description}
                        </p>
                        <small>{this.props.price}</small>
                        <p>{this.props.category}</p>
                    </div>

                </div>

        )
    }
}

export default Product
