import React from 'react';
import Loading from '../components/Loading';
import FatalError from './500';
import Exercise from './Exercise';
import UseFetch from '../hooks/UseFetch';
import UrlDefault from '../Config';

export default () => {
    const { data, loading, error } = UseFetch(UrlDefault);
    if(loading){
        return <Loading/>
    }
    if(error){
        return <FatalError/>
    }
    return(
        <Exercise information={data}/>
    )
}