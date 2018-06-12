// @flow
import { connect } from 'react-redux';
import { getRacesAction } from 'actions/f1-races';
import { getSeasonsAction } from 'actions/f1-seasons';

import { F1SeasonDetail } from './';

const mapStateToProps = (state, ownProps) => ({
  races: state.f1Races,
  season: state.f1Seasons.seasons[ownProps.match.params.year],
  seasons: state.f1Seasons,
});

const mapDispatchToProps = dispatch => ({
  getRaceData: (year: string) => dispatch(getRacesAction(year)),
  getSeasons: () => dispatch(getSeasonsAction()),
});

export const F1SeasonDetailConnected = connect(mapStateToProps, mapDispatchToProps)(F1SeasonDetail);
