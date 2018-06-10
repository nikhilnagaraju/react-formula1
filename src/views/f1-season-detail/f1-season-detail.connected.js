// @flow
import { connect } from 'react-redux';
import { getRacesAction } from 'actions/f1-races';
import { F1SeasonDetail } from './';

const mapStateToProps = state => ({ races: state.f1Races });

const mapDispatchToProps = dispatch => ({
  getRaceData: (year: string) => dispatch(getRacesAction(year)),
});

export const F1SeasonDetailConnected = connect(mapStateToProps, mapDispatchToProps)(F1SeasonDetail);
