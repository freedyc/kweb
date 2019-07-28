import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import {
    Picture,
    Navigation,
    Term,
} from './assets/index'

export default function() {
    return (
        <Switch>
            <Route path="/photography" exact  component={Picture} />
            <Route path="/nav" exact component={Navigation} />
            <Route path="/term" exact component={Term} />
            <Route render={() => <Redirect to="/photography" />}></Route>
        </Switch>
    )
}
