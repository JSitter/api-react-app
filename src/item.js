import React, {Component} from 'react'

class Item extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <small>{this.props.price}</small>
                <p>{this.props.category}</p>
            </div>
        )
    }
}

export default Item