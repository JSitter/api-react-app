import React, { Component } from 'react'

class MyComponent extends Component {

    render (){
        return (
            <div>
                <h1 className="title">{this.props.title}</h1>
            </div>
        )
    }
}

export default MyComponent