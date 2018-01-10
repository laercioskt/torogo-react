import {
  BOARD,
  MOVE_BOARD,
} from './constants';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectPieces, selectBoardPosition } from './selectors';

import Board from './board/Board.js';

class App extends Component {
  
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
  pieces: selectPieces(state),
  boardPosition: selectBoardPosition(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ 
    play:(position) => ({
      type: BOARD,
      data: position,
    }), 
    moveBoard:(direction) => ({
      type: MOVE_BOARD,
      data: direction,
    }) 
  }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
