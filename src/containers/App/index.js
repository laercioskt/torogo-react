import {
  BOARD,
  MOVE_BOARD,
} from './constants';

import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

const mapStateToProps = (state) => ({
    pieces: state.get('pieces'),
    boardPosition: state.get('boardPosition'),
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
