import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAPIData, getBoard } from './actions';
import { selectApiData, selectPieces } from './selectors';

import logo from './images/logo.svg';
import Board from './board/Board.js';

const getMyIp = (apiData) => (
  (apiData && apiData.origin) && apiData.origin.split(', ')[1]
);

class App extends Component {
  componentWillMount() {
    this.props.actions.getAPIData();
  }

  render() {
    var oquemostrar = <span>estou esperando</span>
    var mostraIP = 
        <p className="app-intro">
          Your IP is: {getMyIp(this.props.apiData)}
        </p>
    if (!this.props.apiDataLoading) oquemostrar = mostraIP
    return (
      <div className="app">
        <Board pieces={this.props.pieces} actions={this.props.actions} />
      </div>
    );
  }
}

App.defaultProps = {
  apiData: {},
};

App.propTypes = {
  actions: PropTypes.object.isRequired,
  apiData: PropTypes.object,
};

const mapStateToProps = (state) => ({
  apiData: selectApiData(state),
  pieces: selectPieces(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData, getBoard }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
