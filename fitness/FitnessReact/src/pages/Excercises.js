import React, { Component } from 'react';
import ExcerciceList from '../components/ExcerciceList';
import Welcome from '../components/Welcome';
import AddButton from '../components/AddButton';
import information from '../localInformation/data.json';

export default class Excercises extends Component{

    state = {
            data: {information}
        };

    render(){
        return(
            <div>
                <Welcome userName="Roberto"/>
                <ExcerciceList excercices={this.state.data}/>
                <AddButton/>
            </div>
        )
    }
}