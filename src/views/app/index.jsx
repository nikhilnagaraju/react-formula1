// @flow
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { Image } from 'components/image';
import { store } from 'store';
import { F1SeasonsListConnected } from 'views/f1-seasons-list';
import { F1SeasonDetailConnected } from 'views/f1-season-detail';
import { NotFound } from 'views/not-found';
import styles from './app.scss';

export const App = () => (
  <Fragment>
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className={styles.overlay} />
          <header className={styles.header}>
            <div>
              <Image src="/assets/images/f1_logo.svg" alt="Formula 1" />
              <h1>Formula 1 Statistics</h1>
            </div>
          </header>
          <nav className={styles.navigation}>
            <div>
              <Link to="/seasons">Seasons List</Link>
              <Link to={`/season/${(new Date()).getFullYear()}`}>Current Season</Link>
            </div>
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
            <small>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/sparkbuzz/react-formula1"
              >
                GitHub Source
              </a>
            </small>
            <span>&nbsp;|&nbsp;</span>
            <small>Powered by&nbsp;
              <a rel="noopener noreferrer" target="_blank" href="https://ergast.com/mrd/">Ergast API</a>
            </small>
          </footer>
        </Fragment>
      </Router>
    </Provider>
  </Fragment>
);
