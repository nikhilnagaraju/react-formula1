import { connect } from 'react-redux';
import { getSeasonsAction } from 'actions/f1-seasons';
import { F1SeasonsList } from './';

const mapStateToProps = state => ({
  seasons: state.f1Seasons,
});

const mapDispatchToProps = dispatch => ({
  getSeasons: () => dispatch(getSeasonsAction()),
});

export const F1SeasonsListConnected = connect(mapStateToProps, mapDispatchToProps)(F1SeasonsList);
