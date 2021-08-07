import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { TvShowsRoutes } from './TvShowsRoutes';

  export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch> 
                    <Route path="/" component={ TvShowsRoutes } />
                </Switch>
            </div>
        </Router>
    )
}