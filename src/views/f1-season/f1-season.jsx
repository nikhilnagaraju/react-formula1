// @flow
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';

type Props = {
  match: { params: { year: string } }
}

const F1SeasonDetailComponent = ({ match }: Props) => (
  <Fragment>
    <h2>F1 Season - {match.params.year}</h2>
    <p>Season detail...</p>
  </Fragment>
);

const F1SeasonDetailWithRouter = withRouter(F1SeasonDetailComponent);

export { F1SeasonDetailWithRouter as F1SeasonDetail };
