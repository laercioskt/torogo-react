import React, { Component } from 'react';

class BoardSlot extends Component {
  render() {
    return <g transform={"translate("+this.props.col+","+this.props.row+")"}>
      <svg>
        <rect height="1" width="1" y="0" x="0" fill="#ffbd13"/>
        <path stroke="#000" strokeWidth=".100" d="m0.5 0v1" />
        <path stroke="#000" strokeWidth=".100"  d="m1 0.5h-1" />
      </svg>
    </g>;
  }
}

export default BoardSlot;