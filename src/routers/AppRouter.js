import React from 'react'
import { Navbar } from '../components/common/Navbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

import { TvShowsRoutes } from './TvShowsRoutes';

  export const AppRouter = () => {
    return (
      <>
        <Router>
          < Navbar />
            <div>
                <Switch> 
                    <Route path="/" component={ TvShowsRoutes } />
                </Switch>
            </div>
        </Router>
      </>

    )
}