import React, { Component } from 'react';

class BoardSlot extends Component {
  render() {
    return <g transform={"translate("+this.props.col+","+this.props.row+")"}>
      <svg>
        <rect height="1" width="1" y="0" x="0" fill="#ffbd13"/>
        <path stroke="#000" strokeWidth=".100" d="m0.5 -0.5v2" />
        <path stroke="#000" strokeWidth=".100"  d="m1.5 0.5h-2" />
      </svg>
    </g>;
  }
}

export default BoardSlot;