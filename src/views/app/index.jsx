import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { F1SeasonsConnected } from 'views/f1-seasons';
import { F1SeasonDetailConnected } from 'views/f1-season-detail';
import { NotFound } from 'views/not-found';
import { store } from 'store';

export const App = () => (
  <Fragment>
    <Provider store={store}>
      <Router>
        <Fragment>
          <h1>Formula 1 Statistics</h1>
          <nav>
            <Link to="/seasons">Seasons List</Link>
            <span> | </span>
            <Link to="/season/2018">Current Season</Link>
          </nav>
          <Switch>
            <Route exact path="/seasons" component={F1SeasonsConnected} />
            <Route exact path="/season/:year" component={F1SeasonDetailConnected} />
            <Redirect exact from="/" to="/seasons" />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  </Fragment>
);
