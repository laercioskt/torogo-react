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

    return <g transform={"translate("+col+","+row+")"}  onClick={play}>
      <use href="#boardSlot"/>
    </g>;
  }
}

export default BoardSlot;