import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExcerciceNewContainer from '../pages/ExcerciceNewContainer';
import ExerciseContainer from '../pages/ExerciseContainer';
import error404 from '../pages/404';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercice" component={ExerciseContainer} />
                <Route exact path="/exercice/new" component={ExcerciceNewContainer} />
                <Route component={error404}/>
            </Switch>
        </BrowserRouter>
    )
}