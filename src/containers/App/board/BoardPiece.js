import React, { PureComponent } from 'react';


class BoardPiece extends PureComponent {
  render() {
    var col = this.props.col;
    var row = this.props.row;
    var color = this.props.pieceType;
    if(color === 1)
      return <g transform={`translate(${col},${row})`}> <use href="#whitePiece"/> </g>;
    return <g transform={`translate(${col},${row})`}> <use href="#blackPiece"/> </g>;
  }

}

export default BoardPiece;
