// @flow
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

type Props = {
  match: { params: { year: string } },
  races: Array,
  getRaceData: Function,
}

class F1SeasonDetailComponent extends Component<Props> {
  constructor(props) {
    super(props);
    props.getRaceData(props.match.params.year);
  }

  render() {
    const { races, match: { params: { year } } } = this.props;

    return (
      <Fragment>
        <h2>F1 Season Winners - {year}</h2>
        {races.length && races.map((race) => {
          const winner = race.Results[0].Driver;
          const circuit = race.Circuit;
          return (
            <li><b>{race.raceName}</b> - <b>{circuit.circuitName} </b> - {winner.givenName} {winner.familyName}</li>
          );
        })}
      </Fragment>
    );
  }
}

const F1SeasonDetailWithRouter = withRouter(F1SeasonDetailComponent);

export { F1SeasonDetailWithRouter as F1SeasonDetail };
