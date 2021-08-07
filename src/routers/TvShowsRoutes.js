import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';


export const TvShowsRoutes = () => {
    return (
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/shows" component={ Navbar } />

                    <Redirect to="/shows" />
                </Switch>
            </div>
    )
}
