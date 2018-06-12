// @flow
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Image } from 'components/image';
import { Loader } from 'components/loader';
import { flags } from 'config';
import styles from './f1-season-detail.scss';

type Props = {
  match: { params: { year: string } },
  races: Array,
  season: Object,
  getRaceData: Function,
  getSeasons: Function,
}

class F1SeasonDetailComponent extends Component<Props> {
  constructor(props) {
    super(props);
    props.getRaceData(props.match.params.year);
    props.getSeasons();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.match.params.year !== this.props.match.params.year) {
      this.props.getRaceData(nextProps.match.params.year);
    }
    return true;
  }

  render() {
    const {
      races,
      season: { driver: champion } = { driver: '' },
      match: { params: { year } },
    } = this.props;

    if (!races.length) {
      return <Loader>Fetching race data...</Loader>;
    }

    return (
      <section className={styles['f1-season-detail']}>
        <h2>F1 Race Winners - {year}</h2>
        <Image className={styles.trophy} src="/assets/images/trophy.svg" alt="Champion trophy" />
        <span>
          {champion.givenName} {champion.familyName}
          <br />
          <small>{champion.nationality}</small>
        </span>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Driver / Nationality</th>
              <th>Location / Track</th>
              <th>Laps</th>
              <th>Race Date</th>
            </tr>
          </thead>
          <tbody>
            {races.map((race) => {
              const winner = race.Results[0].Driver;
              const circuit = race.Circuit;
              return (
                <tr
                  key={race.raceName}
                  className={champion.driverId === winner.driverId ? styles.champion : ''}
                >
                  <td className={styles.number}>
                    <span>{winner.permanentNumber || '-'}</span>
                  </td>
                  <td>
                    <Image
                      className={styles.portrait}
                      src={`/assets/images/drivers/${winner.driverId}.png`}
                      fallback="/assets/images/default.svg"
                    />
                    <p>
                      <span>{winner.givenName} {winner.familyName}</span>
                      <br />
                      <Image
                        className={styles.flag}
                        src={`/assets/images/flags/${flags[winner.nationality.toLowerCase()]}.png`}
                        alt={winner.driverId}
                      />
                    </p>
                  </td>
                  <td>
                    {race.raceName}
                    <br />
                    <small>{circuit.circuitName}</small>
                  </td>
                  <td>
                    {/* Cheating a bit, using the winners lap count */}
                    {race.Results[0].laps}
                  </td>
                  <td>{race.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    );
  }
}

const F1SeasonDetailWithRouter = withRouter(F1SeasonDetailComponent);

export { F1SeasonDetailWithRouter as F1SeasonDetail };
