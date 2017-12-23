import React, { Component } from 'react';

class BoardSlot extends Component {
  render() {
    var col = this.props.col;
    var row = this.props.row;
    var position = {row, col};
    var alertMe = () => this.props.actions.getBoard(position);
    return <g transform={"translate("+col+","+row+")"}>
      <svg onClick={alertMe} >
        <rect height="1" width="1" y="0" x="0" fill="#ffbd13" />
        <path stroke="#000" strokeWidth=".100" d="m0.5 -0.5v2" />
        <path stroke="#000" strokeWidth=".100"  d="m1.5 0.5h-2" />
      </svg>
    </g>;
  }
}

export default BoardSlot;