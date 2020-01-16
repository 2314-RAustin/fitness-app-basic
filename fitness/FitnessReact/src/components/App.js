import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Excercices from '../pages/Excercises';
import ExcerciceNew from '../pages/ExcerciceNew';
import error404 from '../pages/404';

export default () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/excercice" component={Excercices} />
                <Route exact path="/excercice/new" component={ExcerciceNew} />
                <Route component={error404}/>
            </Switch>
        </BrowserRouter>
    )
}