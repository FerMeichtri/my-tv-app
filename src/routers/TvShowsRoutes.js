import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { ShowList } from '../components/shows/ShowList';

export const TvShowsRoutes = () => {
    return (
        <>
            < Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/shows" component={ ShowList } />

                    <Redirect to="/shows" />
                </Switch>
            </div>
        </>
    )
}
