
import React from 'react';
import { Route, DefaultRoute  } from 'react-router'; 
import Overview from './views/overview';
import App from './views/app';
export default (
    <Route name='main' path='/' handler={App}>
        <DefaultRoute name="overview" handler={Overview} /> 
    </Route>
);