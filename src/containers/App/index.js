import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAPIData, getBoard } from './actions';
import { selectApiData, selectPieces } from './selectors';

import Board from './board/Board.js';

class App extends Component {
  componentWillMount() {
    this.props.actions.getAPIData();
  }

  render() {
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
