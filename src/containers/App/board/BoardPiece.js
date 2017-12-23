import React, { Component } from 'react';
import Logo from './Logo';

class BoardPiece extends Component {
  render() {
    var col = this.props.col;
    var row = this.props.row;
    var color = this.props.color;
    return <g transform={"translate("+col+","+row+")"}>
        <svg>
          <circle strokeWidth=".035006" cy=".52" cx=".52" r=".4" fill="#333333"/>
          <circle strokeWidth=".035006" cy=".5" cx=".5" r=".4" fill={this.props.color}/>
        </svg>
        <Logo color={color}/>
      </g>;
  }
}

export default BoardPiece;