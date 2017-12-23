import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getAPIData, getBoard, moveBoard } from './actions';
import { selectApiData, selectPieces, selectBoardPosition } from './selectors';

import Board from './board/Board.js';

class App extends Component {
  componentWillMount() {
    this.props.actions.getAPIData();
  }

  render() {
    return (
      <div className="app">
        <Board pieces={this.props.pieces} actions={this.props.actions} boardPosition={this.props.boardPosition} />
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
  boardPosition: selectBoardPosition(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ getAPIData, getBoard, moveBoard }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
