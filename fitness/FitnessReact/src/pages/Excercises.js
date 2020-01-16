import React, { Component } from 'react';
import ExcerciceList from '../components/ExcerciceList';
import Welcome from '../components/Welcome';
import AddButton from '../components/AddButton';
import Loading from '../components/Loading';
import FatalError from '../pages/500';


export default class Excercises extends Component{

    state = {
            data:[],
            loading: true,
            error: null
    }

    async componentDidMount(){

        try{
            let res = await fetch('http://localhost:8000/api/exercises');
            let data = await res.json();
            
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
            <div>
                <Welcome userName="Roberto"/>
                <ExcerciceList excercices={this.state.data}/>
                <AddButton/>
            </div>
        )
    }
}