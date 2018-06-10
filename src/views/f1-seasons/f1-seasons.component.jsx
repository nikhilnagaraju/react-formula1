// @flow
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  getSeasons: Function,
  seasons: Array,
}

export class F1SeasonsComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.props.getSeasons();
  }

  render() {
    return (
      <Fragment>
        <h2>F1 Seasons</h2>
        <p>List of F1 seasons...</p>
        <ol>
          {this.props.seasons.length && this.props.seasons.map(({ season }) => (
            <li><Link key={season} to={`/season/${season}`}>{season}</Link></li>
          ))}
        </ol>
      </Fragment>
    );
  }
}
