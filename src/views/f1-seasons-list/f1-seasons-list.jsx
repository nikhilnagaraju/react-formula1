// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FlashMessage } from 'components/flash-message';
import styles from './f1-seasons-list.scss';

type Props = {
  getSeasons: Function,
  seasons: Array,
}

export class F1SeasonsList extends Component<Props> {
  constructor(props) {
    super(props);
    this.props.getSeasons();
  }

  render() {
    const { seasons } = this.props;
    return (
      <section className={styles['f1-seasons-list']}>
        <h2>F1 Seasons</h2>
        {seasons.error && <FlashMessage>{seasons.error}</FlashMessage>}
        <ol>
          {seasons && Object.keys(seasons).map((season) => {
            const { driver } = seasons[season];
            return (
              <li key={season}>
                <Link to={`/season/${season}`}>
                  <h1 className={styles.date}>{season}</h1>
                  <span>{driver.givenName} {driver.familyName}</span>
                  <img src={`/assets/images/${driver.driverId}.png`} alt="{driver.driverId}" />
                  <small>{driver.nationality}</small>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }
}
