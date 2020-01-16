import React, { Component } from 'react';
import ExcerciceForm from '../components/ExcerciseForm';
import Card from '../components/Card';
import Loading from '../components/Loading';
import Error500 from '../pages/500';
import '../styles/ExerciseNew.css';

export default class ExcerciceNew extends Component{
    
    state = {
        form:{
            title:'',
            description:'',
            img:'',
            leftColor:'',
            rightColor:''
        },
        loading: false,
        error: null
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

    handleSubmit = async e => {
        this.setState({
            loading: true
        })
        e.preventDefault();
        try {
            let config = {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            await fetch('http://localhost:8000/api/exercises', config);
            this.setState({
                loading: false
            })

            this.props.history.push('/excercice');
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
        if(this.state.loading){
            return <Loading/>
        }

        if(this.state.error){
            return <Error500/>
        }

        return (
            <div className="ExerciseNew_Lateral_Spaces row">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card {...this.state.form}/>
                </div>
                <div className="col-sm ExerciseNew_Form_Space">
                    <ExcerciceForm onChange={this.handleChange} form={this.state.form} onSubmit={this.handleSubmit} />
                </div>
            </div>

            
        )
    }
}