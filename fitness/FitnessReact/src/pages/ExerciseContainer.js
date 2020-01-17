import React, { Component } from 'react';
import Loading from '../components/Loading';
import FatalError from './500';
import Exercise from './Exercise';

export default class ExerciseContainer extends Component{

    state = {
            data:[],
            loading: true,
            error: null
    }

    async componentDidMount(){

        try{
            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();
            console.log(data);
            
            this.setState({
                data,
                loading: false
            })
        }
        catch(error){
            this.setState({
                loading: false,
                error
            })
        }
    }

    render(){
        if(this.state.loading)
            return <Loading/>
        if(this.state.error)
            return <FatalError/>
        return(
            <Exercise information={this.state.data}/>
        )
    }
}