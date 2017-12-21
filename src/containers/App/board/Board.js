import React, { Component } from 'react';
import BoardPiece from './BoardPiece';
import BoardSlot from './BoardSlot';


class Board extends Component {
  render() {
    var that = this;      
    var squares = [];
    for (var i = 0; i <= 18; i++) {
      for (var j = 0; j <= 18; j++) {
          squares.push(<BoardSlot col={i} row={j} />);
      }
    }
    return (
      <div>
          <svg height="1000" width="1000" viewBox="0 0 18 18">
          {squares}
          {
            that.props.pieces.map(function(boardRow, row){
              return boardRow.map(function(piece, col){
                  if (piece === 0) return;
                  if (piece === 1) return <BoardPiece col={col} row={row} color="#F9F9F9" />;
                  return <BoardPiece col={col} row={row} color="#222222" />;
              });
            })
          }
        </svg>
      </div>
    );
  }
}

export default Board;