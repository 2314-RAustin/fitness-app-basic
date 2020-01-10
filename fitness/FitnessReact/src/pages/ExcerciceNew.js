import React, { Component } from 'react';
import ExcerciceForm from '../components/ExcerciseForm';
import Card from '../components/Card';

export default class ExcerciceNew extends Component{
    
    state = {
        form:{
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        }
    }

    handleChange = e => {
        this.setState({
            form:
            {   
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return (
            <div className="row">
                <div className="col-sm">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm">
                    <ExcerciceForm onChange={this.handleChange} form={this.state.form} />
                </div>
            </div>

            
        )
    }
}