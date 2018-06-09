import React, { Fragment } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import F1Seasons from 'views/f1-seasons';
import F1Season from 'views/f1-season';
import NotFound from 'views/not-found';
import store from 'store';

export default () => (
  <Fragment>
    <Provider store={store}>
      <Router>
        <Fragment>
          <nav>
            <Link to="/seasons">Seasons List</Link>
            <span> | </span>
            <Link to="/season/2018">Current Season</Link>
          </nav>
          <Redirect from="/" to="/seasons" />
          <Switch>
            <Route exact path="/seasons" component={F1Seasons} />
            <Route exact path="/season/:year" component={F1Season} />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  </Fragment>
);
