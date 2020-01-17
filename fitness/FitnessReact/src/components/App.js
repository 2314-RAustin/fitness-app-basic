import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Excercices from '../pages/Excercises';
import ExcerciceNewContainer from '../pages/ExcerciceNewContainer';
import error404 from '../pages/404';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/excercice" component={Excercices} />
                <Route exact path="/excercice/new" component={ExcerciceNewContainer} />
                <Route component={error404}/>
            </Switch>
        </BrowserRouter>
    )
}