import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home'
import Heart from './Heart'
import Diabetes from './Diabetes'
import Cancer from './Breast_Cancer'
import Result from './Results'
const Health = () => {

    return (
        <Router>
            <Switch>
                <Route path={`/diabetes`} component={Diabetes} />
                <Route path={`/heart`}  component={Heart} />
                <Route path={`/cancer`} component={Cancer} />
                <Route path={`/results`} component={Result} />
                <Route path={`/`} component={Home} />
            </Switch>
        </Router>
    )
}

export default Health

