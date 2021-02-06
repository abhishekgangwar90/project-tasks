import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import { appRoutes } from '../../config/routeConfig';

function Routes(){
    return <Router basename="/">
        <Switch>
            {appRoutes.map((route) =>
                <Route 
                key={route.id} 
                exact strict 
                path={route.path} 
                component={route.component} 
                />
            )}
        </Switch>
    </Router>
}

export default Routes;