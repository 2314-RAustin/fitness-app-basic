import React from 'react';
import ExcerciceList from '../components/ExcerciceList';
import Welcome from '../components/Welcome';
import AddButton from '../components/AddButton';

export default (information) => {

    return(
        <React.Fragment>
            <Welcome userName="Roberto"/>
            <ExcerciceList excercices={information}/>
            <AddButton/>
        </React.Fragment>
    )
}