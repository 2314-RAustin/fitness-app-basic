import React, { Component } from "react";

import circleImg from '../images/circles.png';
import emptyImg from '../images/empty.png';
import '../styles/Card.css';

export default class Card extends Component {


    state = {
        imagen: ''
    }

    componentDidMount(){
        this.setState({
            imagen: this.props.img
        });
    }
    
    render() {
        const { img, title, description, leftColor, rightColor } = this.props;
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage:`url(${circleImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || emptyImg} className="float-right" alt=""/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};