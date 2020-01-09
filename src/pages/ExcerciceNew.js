import React, { Component } from 'react';

export default class notFound extends Component{
    
    handleClick = () => console.log("object");
    
    render(){
        return (
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
}