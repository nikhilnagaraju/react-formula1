// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FlashMessage } from 'components/flash-message';
import { Image } from 'components/image';
import { Loader } from 'components/loader';
import { flags } from 'config';
import styles from './f1-seasons-list.scss';

type Props = {
  getSeasons: Function,
  seasons: Array,
  seasonsCount: Number,
}

export class F1SeasonsList extends Component<Props> {
  constructor(props) {
    super(props);
    this.props.getSeasons();
  }

  render() {
    const { seasons, seasonsCount } = this.props;

    if (seasonsCount !== Object.keys(seasons).length) {
      return <Loader>Fetching season data...</Loader>;
    }

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
                  <Image
                    className={styles.portrait}
                    src={`/assets/images/drivers/${driver.driverId}.png`}
                    alt={driver.driverId}
                  />
                  <Image
                    className={styles.flag}
                    src={`/assets/images/flags/${flags[driver.nationality.toLowerCase()]}.png`}
                    alt={driver.driverId}
                  />
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    );
  }
}
