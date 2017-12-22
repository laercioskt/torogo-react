import React, { Component } from 'react';
import BoardPiece from './BoardPiece';
import BoardSlot from './BoardSlot';


class Board extends Component {
  render() {    
    var svgFragments = [];
    for (var i = 0; i <= 18; i++) {
      for (var j = 0; j <= 18; j++) {
        svgFragments.push(<BoardSlot col={i} row={j} />);
        var piece = this.props.pieces.getIn([i,j]);
        if (piece === 1) svgFragments.push( <BoardPiece col={i} row={j} color="#F9F9F9" />);
        if (piece === 2) svgFragments.push( <BoardPiece col={i} row={j} color="#222222" />);
      }
    }
    return (
      <div>
          <svg height="1000" width="1000" viewBox="0 0 18 18">
             <rect height="18" width="18" y="0" x="0" fill="#ffbd13"/>
            {svgFragments}
          </svg>
      </div>
    );
  }
}

export default Board;