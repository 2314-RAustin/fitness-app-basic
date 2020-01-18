import React, { Component } from 'react';
import ExcerciseNew from './ExcerciseNew';
import Loading from '../components/Loading';
import Error500 from './500';
import '../styles/ExerciseNew.css';
import UrlDefault from '../Config';

export default class ExcerciceNewContainer extends Component{
    
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

            await fetch(`${UrlDefault}/exercises`, config);
            this.setState({
                loading: false
            })

            this.props.history.push('/exercice');
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
            <ExcerciseNew form={this.state.form} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        )
    }
}