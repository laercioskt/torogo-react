import React, { Component } from 'react';

class BoardSlot extends Component {
  render() {
    var col = this.props.col;
    var row = this.props.row;
    var length = this.props.boardSize;
    var colP = col < 0 ? length + col % length : col % length;
    var rowP = row < 0 ? length + row % length : row % length;
    var position = {row: rowP, col: colP};
    var play = () => this.props.actions.play(position);
    return <g transform={"translate("+col+","+row+")"}>
      <svg onClick={play} >
        <rect height="1" width="1" y="0" x="0" fill="#ffbd13" />
        <path stroke="#000" strokeWidth=".100" d="m0.5 -0.5v2" />
        <path stroke="#000" strokeWidth=".100"  d="m1.5 0.5h-2" />
      </svg>
    </g>;
  }
}

export default BoardSlot;