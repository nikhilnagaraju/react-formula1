import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { F1SeasonsListConnected } from 'views/f1-seasons-list';
import { F1SeasonDetailConnected } from 'views/f1-season-detail';
import { NotFound } from 'views/not-found';
import { store } from 'store';
import styles from './app.scss';

export const App = () => (
  <Fragment>
    <Provider store={store}>
      <Router>
        <Fragment>
          <header className={styles.header}>
            <img src="/assets/images/f1_logo.svg" alt="Formula 1" />
            <h1>Formula 1 Statistics</h1>
          </header>
          <nav className={styles.navigation}>
            <Link to="/seasons">Seasons List</Link>
            <Link to="/season/2018">Current Season</Link>
          </nav>
          <main className={styles.main}>
            <Switch>
              <Route exact path="/seasons" component={F1SeasonsListConnected} />
              <Route exact path="/season/:year" component={F1SeasonDetailConnected} />
              <Redirect exact from="/" to="/seasons" />
              <Route component={NotFound} />
            </Switch>
          </main>
          <footer className={styles.footer}>
            <small>Powered by&nbsp;
              <a rel="noopener noreferrer" target="_blank" href="https://ergast.com/mrd/">Ergast API</a>
            </small>
          </footer>
        </Fragment>
      </Router>
    </Provider>
  </Fragment>
);
