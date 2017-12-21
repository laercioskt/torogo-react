import React, { Component } from 'react';

class BoardPiece extends Component {
  render() {
    return <g transform={"translate("+this.props.col+","+this.props.row+")"}>
        <svg>
          <circle strokeWidth=".035006" cy=".52" cx=".52" r=".4" fill="#333333"/>
          <circle strokeWidth=".035006" cy=".5" cx=".5" r=".4" fill={this.props.color}/>
        </svg>
      </g>;
  }
}

export default BoardPiece;