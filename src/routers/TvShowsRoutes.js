import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/common/Navbar';
import { ShowList } from '../components/shows/ShowList';
import { ShowDetailScreen } from '../components/shows/ShowDetailScreen';

export const TvShowsRoutes = () => {
    return (
        <>
            < Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/shows" component={ ShowList } />
                    <Route exact path="/shows/:showId" component={ ShowDetailScreen } />

                    <Redirect to="/shows" />
                </Switch>
            </div>
        </>
    )
}
