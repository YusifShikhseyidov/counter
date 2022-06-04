import React, { Component } from "react";
import "./scrimba.css";

export default class Scrimba extends Component {
    
    state={
        count: 0
    }

    add = () =>{
        this.setState((prevState)=> ({count: prevState.count + 1}))
    }

    subtract = () =>{
        this.setState((prevState)=> ({count: prevState.count - 1}));
    }

    render(){
        return(
            <div className="container">
                <button className="left" onClick={this.add}>+</button>
                <div className="heading-container">
                    <h2>{this.state.count}</h2>
                </div>
                <button className="right" onClick={this.subtract}>-</button>
            </div>
        )
    }
}